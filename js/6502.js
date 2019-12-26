
class CPU6502 {
  interruptVector = 0xFFFE; // 0xFFFE and 0xFFFF will store a 16 bit address to jump to on interrupt
  registers = new Uint8Array(new ArrayBuffer(5));
  PC = 0; // Program Counter, This is a 16 bit value for addressing 64K of memory
  pageCrossed = false;

  readMemory(address) {
    return this.memory[address];
  }

  stackPointer () {
    return this.S + 0x0100;
  }

  stackPush (val) {
    this.memory[this.stackPointer()] = val;
    this.S--;
  }

  stackPeek () {
    return this.memory[this.stackPointer() + 1];
  }

  stackPop () {
    this.S++;
    var val = this.memory[this.stackPointer()];
    this.memory[this.stackPointer()] = 0;
    return val;
  }

  runOp (opCode) {
    switch (opCode) {
      case 0x00:
        return this.brk();
      default:
        console.log("NO OP CODE");
        return;
    }
  }

  run () {
    var op = this.memory[this.PC];
    this.runOp(op);
  }

  isNegative (val) {
    return val & 0b10000000;
  }

  reset () {
    this.A = 0;
    this.X = 0;
    this.Y = 0;
    this.PC = null;
    this.S = 0xFD;
    this.P = 0x34;
    this.memory.fill(0x00);
  }


  printStack () {
    for (var i = this.S; i <= 0xFF; i++) {
      console.log(`Stack Address ${(0x0100 + i).toString(16)}`, this.memory[0x100 + i]);
    }
  }

  set A(val) {
    this.registers[0] = val;
  };

  get A() {
    return this.registers[0];
  };

  set X(val) {
    this.registers[1] = val;
  };

  get X() {
    return this.registers[1];
  };

  set Y(val) {
    this.registers[2] = val;
  }

  get Y() {
    return this.registers[2];
  }

  set P(val) {
    this.registers[3] = val;
  }

  get P() {
    return this.registers[3];
  }

  set S(val) {
    this.registers[4] = val;
  }

  get S() {
    return this.registers[4];
  }

  constructor (memory) {
    this.memory = memory;
    this.reset();
  }

  printRegisters() {
    console.table({
      ACCUMULATOR: (this.A).toString(2),
      X: (this.X).toString(2),
      Y: (this.Y).toString(2),
      STACK_OFFSET_S: (this.S).toString(2),
      PROGRAM_COUNTER_PC: (this.PC).toString(2),
      PROCESSOR_STATUS_P: (this.P).toString(2),
    });
  }

  stackPushPC () {
    // This is a 2 part operation that always happens together.
    // We need to push 2 8bit values to the stack so they can be
    // rejoined later into a 16bit val

    // Push the Hi Byte of PC
    this.stackPush((this.PC & 0b1111111100000000) >> 8);
    // Push Lo Byte
    this.stackPush((this.PC & 0b0000000011111111));
  }

  stackPopPC () {
    // This is a 2 part operation that always happens together.
    // We need to pop 2 8bit values from the stack so they can be
    // rejoined later into a 16bit val

    // Push the Hi Byte of PC
    var loByte = this.stackPop();
    // Push Lo Byte
    var hiByte = this.stackPop();
    return ((hiByte << 8 ) | loByte);
  }

  read16Bits(startingAt) {
    // NES is little endian, so we need to keep that in mind when pulling in a 16 bit value
    var loByte = this.memory[startingAt];
    var hiByte = this.memory[startingAt + 1];
    return ((hiByte << 8) | loByte);
  }

  write16Bits(startingAt, value) {
    var loByte = (value & 0b0000000011111111);
    var hiByte = ((value & 0b1111111100000000) >> 8 );
    this.memory[startingAt] = loByte;
    this.memory[startingAt + 1] = hiByte;
  }

  clearFlag(flag) {
    switch (flag) {
      case CPU6502.negative:
        this.P = (this.P & 0b01111111);
        break;
      case CPU6502.zero:
        this.P = (this.P & 0b11111101);
        break;
      case CPU6502.overflow:
        // Turn off the carry flag
        this.P = (this.P & 0b10111111 )
        break;
      case CPU6502.interruptDisable:
        // Turn off the carry flag
        this.P = (this.P & 0b11111011 )
        break;
      case CPU6502.carry:
        // Turn off the carry flag
        this.P = (this.P & 0b11111110 )
        break;
      case CPU6502.decimal:
        // Turn off the decimal mode flag
        this.P = (this.P & 0b11110111 )
        break;
      default:
        return;
    }
  }

  setFlag(flag) {
    switch (flag) {
      case CPU6502.carry:
        this.P = (this.P | 1)
        break;
      case CPU6502.zero:
        this.P = (this.P | (1 << 1));
        break;
      case CPU6502.interruptDisable:
        this.P = (this.P | (1 << 2));
        break;
      case CPU6502.decimal:
        this.P = (this.P | (1 <<3));
        break;
      case CPU6502.break:
        this.P = (this.P | (1 << 4))
        break;
      case CPU6502.overflow:
        this.P = (this.P | (1 << 6));
        break;
      case CPU6502.negative:
        this.P = (this.P | (1 << 7));
        break;
      default:
        return;
    }
  }

  flagIsSet(flag) {
    switch (flag) {
      case CPU6502.carry:
        return (this.P & 0b00000001) == 1;
      case CPU6502.zero:
        return (this.P & 0b00000010) == 2;
      case CPU6502.interruptDisable:
        return (this.P & 0b00000100) == 4;
      case CPU6502.decimal:
        return (this.P & 0b00001000) == 8;
      case CPU6502.break:
        return (this.P & 0b00010000) == 16;
      case CPU6502.overflow:
        return (this.P & 0b01000000) == 64;
      case CPU6502.negative:
        return (this.P & 0b10000000) == 128;
      default:
        return;
    }
  }

  getFlag(flag) {
    switch (flag) {
      case CPU6502.break:
        // Break flag is the 4th bit
        return (this.P & (1 << 4))
      default:
        return;
    }
  }

  brk () {
    /* The BRK instruction forces the generation of an interrupt request.
     * The program counter and processor status are pushed on the stack then the
     * IRQ interrupt vector at $FFFE/F is loaded into the PC and the break
     * flag in the status set to one. */
    this.PC += 2;
    this.stackPushPC();
    this.setFlag(CPU6502.break);
    this.stackPush(this.P);
    this.PC = this.read16Bits(this.interruptVector);
    return 7; // This instruction takes 7 cycles
  }

  clc () {
    // Clear Carry Flag
    this.PC++;
    this.clearFlag(CPU6502.carry);
    return 2; // Takes 2 cycles
  }

  cld () {
    // Clear Decimal Mode Flag
    this.PC++;
    this.clearFlag(CPU6502.decimal);
    return 2; // Takes 2 cycles
  }

  cli () {
    // Clear Interrupt Flag
    this.PC++;
    this.clearFlag(CPU6502.interruptDisable);
    return 2; // Takes 2 cycles
  }

  clv () {
    // Clear Overflow Flag
    this.PC++;
    this.clearFlag(CPU6502.overflow);
    return 2; // Takes 2 cycles
  }

  dex () {
    // Decrement X register
    this.PC++;
    this.X--;
    if (this.X == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    if (this.isNegative(this.X)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }
    return 2;
  }

  dey () {
    // Decrement Y register
    this.PC++;
    this.Y--;
    if (this.Y == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    if (this.isNegative(this.Y)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }
    return 2;
  }

  inx () {
    // Increment X register
    this.PC++;
    this.X++;
    if (this.X == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    if (this.isNegative(this.X)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }
    return 2;
  }

  iny () {
    // Increment Y register
    this.PC++;
    this.Y++;
    if (this.Y == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    if (this.isNegative(this.Y)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }
    return 2;
  }

  nop () {
    // No Operation
    this.PC++;
    return 2;
  }

  pha () {
    // Push Accumulator to Stack
    this.PC++;
    this.stackPush(this.A);
    return 3;
  }

  php () {
    // Push Status to Stack
    this.PC++;
    this.stackPush(this.P);
    return 3;
  }

  pla () {
    // Pop from Stack to register A
    this.PC++;
    this.A = this.stackPop();

    if (this.A == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    if (this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return 4;
  }

  plp () {
    // Pull Status from Stack
    this.PC++;
    this.P = this.stackPop();
    return 4;
  }

  rti () {
    // Return from Interrupt
    this.P = this.stackPop();
    this.PC = this.stackPopPC();
    return 6;
  }

  rts () {
    //Return from subroutine
    this.PC = this.stackPopPC();
    this.PC++;
    return 6;
  }

  sec () {
    // Set Carry flag
    this.PC++;
    this.setFlag(CPU6502.carry);
    return 2;
  }

  sed () {
    // Set Decimal Flag
    this.PC++;
    this.setFlag(CPU6502.decimal);
    return 2;
  }

  sei () {
    // Set Interrupt Disable Flag
    this.PC++;
    this.setFlag(CPU6502.interruptDisable);
    return 2;
  }

  tax () {
    // Transfer Accumulator to X
    this.PC++;
    this.X = this.A;
    if(this.isNegative(this.X)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.X == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    return 2;
  }

  tay () {
    // Transfer Accumulator to Y
    this.PC++;
    this.Y = this.A;
    if(this.isNegative(this.Y)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.Y == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    return 2;
  }

  tsx () {
    // Transfer Stack Pointer to X
    this.PC++;
    this.X = this.S;
    if(this.isNegative(this.X)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.X == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    return 2;
  }

  txa () {
    // Transfer X to Accumulator
    this.PC++;
    this.A = this.X;

    if(this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.A == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    return 2;
  }

  txs () {
    // Transfer X to Stack Pointer register
    this.PC++;
    this.S = this.X;
    return 2;
  }

  tya () {
    // Transfer Y to Accumulator
    this.PC++;
    this.A = this.Y;

    if(this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.A == 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }
    return 2;
  }

  bcc () {
    // Branch if Carry Clear
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (!this.flagIsSet(CPU6502.carry)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bcs () {
    // Branch if Carry Set
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (this.flagIsSet(CPU6502.carry)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  beq () {
    // Branch if Equal
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (this.flagIsSet(CPU6502.zero)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bne () {
    // Branch if Not Equal
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (!this.flagIsSet(CPU6502.zero)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bmi () {
    // Branch if Minus
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (this.flagIsSet(CPU6502.negative)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bpl () {
    // Branch if Plus
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (!this.flagIsSet(CPU6502.negative)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bvc () {
    // Branch if Overflow Clear
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (!this.flagIsSet(CPU6502.overflow)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bvs () {
    // Branch if Overflow Set
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    var originalPC = this.PC;
    if (this.flagIsSet(CPU6502.overflow)) {
      cycles += 1;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    }
    return cycles;
  }

  bit (mode) {
    // Bit test
    var cycles = 3;
    if (mode == CPU6502.absolute) {
      cycles += 1;
    }
    this.PC++;
    var targetAddress = this.getAddress(mode);
    var targetValue = this.readMemory(targetAddress);

    if (targetValue & 0b10000000) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (targetValue & 0b01000000) {
      this.setFlag(CPU6502.overflow);
    } else {
      this.clearFlag(CPU6502.overflow);
    }

    if ((this.A & targetValue) === 0) {
      this.setFlag(CPU6502.zero)
    } else {
      this.clearFlag(CPU6502.zero);
    }

    return cycles;
  }

  sta (mode) {
    // Store Accumulator to memory
    var cycles;
    this.PC++;

    switch (mode) {
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 4;
        break;
      case CPU6502.absoluteX:
      case CPU6502.absoluteY:
        cycles = 5;
        break;
      case CPU6502.indirectX:
      case CPU6502.indirect_Y:
        cycles = 6;
        break;
    }

    var targetAddress = this.getAddress(mode);
    this.memory[targetAddress] = this.A;
    return cycles;
  }

  stx(mode) {
    // Store X register to Address
    var cycles;
    this.PC++;

    switch (mode) {
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageY:
      case CPU6502.absolute:
        cycles = 4;
        break;
    }

    var targetAddress = this.getAddress(mode);
    this.memory[targetAddress] = this.X;
    return cycles;
  }

  sty(mode) {
    // Store Y register to Address
    var cycles;
    this.PC++;

    switch (mode) {
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 4;
        break;
    }

    var targetAddress = this.getAddress(mode);
    this.memory[targetAddress] = this.Y;
    return cycles;
  }

  and(mode) {
    // Logical AND with Accumulator
    var cycles;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cyles = 2;
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
      case CPU6502.absoluteX:
      case CPU6502.absoluteY:
        cycles = 4;
        break;
      case CPU6502.indirectX:
        cycles = 6;
        break;
      case CPU6502.indirectY:
        cycles = 5;
        break;
    }

    var targetAddress = this.getAddress(mode);
    if (this.pageCrossed) {
      cycles++;
    }
  }
/*
  TODO ASL
  TODO CMP
  TODO CPX
  TODO CPY
  TODO DEC
  TODO EOR
  TODO INC
  TODO JMP
  TODO JSR
  TODO LDA
  TODO LDX
  TODO LDY
  TODO LSR
  TODO ORA
  TODO ROL
  TODO ROR
  TODO ADC
  TODO SBC
*/

  setPageCrossing(bool) {
    if (bool) {
      this.pageCrossed = true;
    }
  }

  getAddress(mode) {
    var address;
    this.pageCrossed = false;
    switch (mode) {
      case CPU6502.zeroPage:
        address = this.readMemory(this.PC);
        this.PC++;
        break;
      case CPU6502.zeroPageX:
        address = this.readMemory(this.PC);
        /* Clamp to 8 byte values only */
        address = (address + this.X) % 256;
        this.PC += 2;
        break;
      case CPU6502.zeroPageY:
        address = this.readMemory(this.PC);
        /* Clamp to 8 byte values only */
        address = (address + this.Y) % 256;
        this.PC += 2;
        break;
      case CPU6502.absolute:
        address = this.read16Bits(this.PC);
        this.PC += 2;
        break;
      case CPU6502.absoluteX:
        address = this.read16Bits(this.PC);
        // Check for page crossing, will use an extra cycle if so
        this.setPageCrossing(((address + this.X) & 0xFF00) != (address & 0xFF00));
        /* Clamp to 16 bit values only */
        address = (address + this.X) % 0x10000;
        this.PC += 3;
        break;
      case CPU6502.absoluteY:
        address = this.read16Bits(this.PC);
        // Check for page crossing, will use an extra cycle if so
        this.setPageCrossing(((address + this.Y) & 0xFF00) != (address & 0xFF00));
        /* Clamp to 16 bit values only */
        address = (address + this.Y) % 0x10000;
        this.PC += 3;
        break;
      case CPU6502.indirectX:
        address = this.readMemory(this.PC);
        address = (address + this.X) % 0x100;
        address = this.read16Bits(address);
        this.PC += 4;
        break;
      case CPU6502.indirect_Y:
        address = this.read16Bits(this.readMemory(this.PC));
        // Overflow detection logic here, results in an extra cycle
        this.setPageCrossing(((address + this.Y) & 0xFF00) != (adress & 0xFF00));
        address = (address + this.Y) % 0x10000;
        this.PC += 4;
        break;
      default:
    }
    return address;
  }
}

/* Symbols for each Status Flag */
CPU6502.carry = Symbol('Carry Flag');
CPU6502.zero = Symbol('Zero Flag');
CPU6502.interruptDisable = Symbol('Interrupt Disable Flag');
CPU6502.decimal = Symbol('Decimal Mode Flag');
CPU6502.break = Symbol('Break Flag');
CPU6502.overflow = Symbol('Overflow Flag');
CPU6502.negative = Symbol('Negative Flag');

/* Symbols for each Addressing Mode */
CPU6502.accumulator = Symbol('Accumulator Mode');
CPU6502.immediate = Symbol('Immediate Mode');
CPU6502.zeroPage = Symbol('Zero Page Mode');
CPU6502.zeroPageX = Symbol('Zero Page X Mode');
CPU6502.absolute = Symbol('Absolute Mode');
CPU6502.absoluteX = Symbol('Absolute X Mode');
CPU6502.absoluteY = Symbol('Absolute Y Mode');
CPU6502.indirectX = Symbol('Indirect X Mode');
CPU6502.indirect_Y = Symbol('(Indirect), Y Mode');
