function zeroPad (num) {
  return ('00' + (num).toString(16)).slice(-2).toUpperCase();
}

class CPU6502 {
  interruptVector = 0xFFFE; // 0xFFFE and 0xFFFF will store a 16 bit address to jump to on interrupt
  registers = new Uint8Array(new ArrayBuffer(5));
  PC = 0; // Program Counter, This is a 16 bit value for addressing 64K of memory
  pageCrossed = false;
  kill = false;
  waitCycles = 0;
  bus = null;
  cycleCount = 7; // 7 since we start with a BRK
  loggedOpCount = 0;

  logOperation(mode, name) {
    var currentPCString = `${this.PC.toString(16).toUpperCase()} `;
    var registerString = `\t\t\tA:${ zeroPad(this.A) } X:${ zeroPad(this.X) } Y:${ zeroPad(this.Y) } P:${ zeroPad(this.P) } SP:${ this.S.toString(16).toUpperCase() }             CYC:${ this.cycleCount }`
    var memoryString = `${zeroPad(this.memory[this.PC])}`;

    switch (mode) {
      case CPU6502.accumulator:
        memoryString += `\t${name} A\t`
        break;
      case CPU6502.immediate:
        memoryString += ` ${zeroPad(this.memory[this.PC + 1])} \t${name} #$${this.memory[ this.PC + 1 ].toString(16).toUpperCase()}`
        break;
      case CPU6502.zeroPage:
        memoryString += ` ${zeroPad(this.memory[this.PC + 1])} \t${name} $${this.memory[ this.PC + 1 ].toString(16).toUpperCase() } = ${zeroPad(this.memory[this.memory[this.PC + 1]])}`
        break;
      case CPU6502.zeroPageX:
        memoryString += ` TBD ZPX `
        break;
      case CPU6502.zeroPageY:
        memoryString += ` TBD ZPY `
        break;
      case CPU6502.relative:
        memoryString += ` ${zeroPad(this.memory[this.PC + 1])} \t${name} $${(this.memory[ this.PC + 1 ] + this.PC + 2).toString(16).toUpperCase()}`
        break;
      case CPU6502.absolute:
        memoryString += ` ${zeroPad(this.memory[this.PC + 1])} ${this.memory[this.PC + 2].toString(16).toUpperCase()}  ${name} $${this.read16Bits(this.PC + 1).toString(16).toUpperCase()} = ${this.read16Bits(this.read16Bits(this.PC + 1)).toString(16).toUpperCase()}`
        break;
      case CPU6502.absoluteX:
        memoryString += ` TBD ABX `
        break;
      case CPU6502.absoluteY:
        memoryString += ` TBD ABY `
        break;
      case CPU6502.implied:
        memoryString += `\t${name}\t`
        break;
      case CPU6502.indirect:
        memoryString += ` TBD ID `
        break;
      case CPU6502.indirectX:
        const indirectAddress = this.memory[( this.PC + 1 ) + this.X];
        const directAddress = this.read16Bits(this.read16Bits(indirectAddress));
        memoryString += ` ${zeroPad(indirectAddress)} \t${name} ($${zeroPad(indirectAddress)},X) @ ${zeroPad(indirectAddress)} = ${ this.read16Bits(indirectAddress).toString(16)} = ${zeroPad(directAddress)}`
        break;
      case CPU6502.indirect_Y:
        memoryString += ` TBD IDY `
        break;
      default:
        memoryString += ` TBD ??? `
        break;
    }
    console.warn(testLog[this.loggedOpCount]);
    console.log(currentPCString, memoryString, registerString);
    this.loggedOpCount++;
  }

  connectMemory(memory) {
    this.memory = memory;
  }

  connectBus(bus) {
    this.bus = bus;
  }

  execute (opCode) {
    switch (opCode) {
      case 0x69:
        return this.adc(CPU6502.immediate);
      case 0x65:
        return this.adc(CPU6502.zeroPage);
      case 0x75:
        return this.adc(CPU6502.zeroPageX);
      case 0x6D:
        return this.adc(CPU6502.absolute);
      case 0x7D:
        return this.adc(CPU6502.absoluteX);
      case 0x79:
        return this.adc(CPU6502.absoluteY);
      case 0x61:
        return this.adc(CPU6502.indirectX);
      case 0x71:
        return this.adc(CPU6502.indirect_Y);
      case 0x29:
        return this.and(CPU6502.immediate);
      case 0x25:
        return this.and(CPU6502.zeroPage);
      case 0x35:
        return this.and(CPU6502.zeroPageX);
      case 0x2D:
        return this.and(CPU6502.absolute);
      case 0x3D:
        return this.and(CPU6502.absoluteX);
      case 0x39:
        return this.and(CPU6502.absoluteY);
      case 0x21:
        return this.and(CPU6502.indirectX);
      case 0x31:
        return this.and(CPU6502.indirect_Y);
      case 0x0A:
        return this.asl(CPU6502.accumulator);
      case 0x06:
        return this.asl(CPU6502.zeroPage);
      case 0x16:
        return this.asl(CPU6502.zeroPageX);
      case 0x0E:
        return this.asl(CPU6502.absolute);
      case 0x1E:
        return this.asl(CPU6502.absoluteX);
      case 0x90:
        return this.bcc(CPU6502.relative);
      case 0xB0:
        return this.bcs(CPU6502.relative);
      case 0xF0:
        return this.beq(CPU6502.relative);
      case 0x24:
        return this.bit(CPU6502.zeroPage);
      case 0x2C:
        return this.bit(CPU6502.absolute);
      case 0x30:
        return this.bmi(CPU6502.relative);
      case 0xD0:
        return this.bne(CPU6502.relative);
      case 0x10:
        return this.bpl(CPU6502.relative);
      case 0x00:
        return this.brk();
      case 0x50:
        return this.bvc(CPU6502.relative);
      case 0x70:
        return this.bvs(CPU6502.relative);
      case 0x18:
        return this.clc(CPU6502.implied);
      case 0xD8:
        return this.cld(CPU6502.implied);
      case 0x58:
        return this.cli();
      case 0xB8:
        return this.clv(CPU6502.implied);
      case 0xC9:
        return this.cmp(CPU6502.immediate);
      case 0xC5:
        return this.cmp(CPU6502.zeroPage);
      case 0xD5:
        return this.cmp(CPU6502.zeroPageX);
      case 0xCD:
        return this.cmp(CPU6502.absolute);
      case 0xDD:
        return this.cmp(CPU6502.absoluteX);
      case 0xD9:
        return this.cmp(CPU6502.absoluteY);
      case 0xC1:
        return this.cmp(CPU6502.indirectX);
      case 0xD1:
        return this.cmp(CPU6502.indirect_Y);
      case 0xE0:
        return this.cpx(CPU6502.immediate);
      case 0xE4:
        return this.cpx(CPU6502.zeroPage);
      case 0xEC:
        return this.cpx(CPU6502.absolute);
      case 0xC0:
        return this.cpy(CPU6502.immediate);
      case 0xC4:
        return this.cpy(CPU6502.zeroPage);
      case 0xCC:
        return this.cpy(CPU6502.absolute);
      case 0xC6:
        return this.dec(CPU6502.zeroPage);
      case 0xD6:
        return this.dec(CPU6502.zeroPageX);
      case 0xCE:
        return this.dec(CPU6502.absolute);
      case 0xDE:
        return this.dec(CPU6502.absoluteX);
      case 0xCA:
        return this.dex();
      case 0x88:
        return this.dey();
      case 0x49:
        return this.eor(CPU6502.immediate);
      case 0x45:
        return this.eor(CPU6502.zeroPage);
      case 0x55:
        return this.eor(CPU6502.zeroPageX);
      case 0x4D:
        return this.eor(CPU6502.absolute);
      case 0x5D:
        return this.eor(CPU6502.absoluteX);
      case 0x59:
        return this.eor(CPU6502.absoluteY);
      case 0x41:
        return this.eor(CPU6502.indirectX);
      case 0x51:
        return this.eor(CPU6502.indirect_Y);
      case 0xE6:
        return this.inc(CPU6502.zeroPage);
      case 0xF6:
        return this.inc(CPU6502.zeroPageX);
      case 0xEE:
        return this.inc(CPU6502.absolute);
      case 0xFE:
        return this.inc(CPU6502.absoluteX);
      case 0xE8:
        return this.inx();
      case 0xC8:
        return this.iny(CPU6502.implied);
      case 0x4C:
        return this.jmp(CPU6502.absolute);
      case 0x6C:
        return this.jmp(CPU6502.indirect);
      case 0x20:
        return this.jsr(CPU6502.absolute);
      case 0xA9:
        return this.lda(CPU6502.immediate);
      case 0xA5:
        return this.lda(CPU6502.zeroPage);
      case 0xB5:
        return this.lda(CPU6502.zeroPageX);
      case 0xAD:
        return this.lda(CPU6502.absolute);
      case 0xBD:
        return this.lda(CPU6502.absoluteX);
      case 0xB9:
        return this.lda(CPU6502.absoluteY);
      case 0xA1:
        return this.lda(CPU6502.indirectX);
      case 0xB1:
        return this.lda(CPU6502.indirect_Y);
      case 0xA2:
        return this.ldx(CPU6502.immediate);
      case 0xA6:
        return this.ldx(CPU6502.zeroPage);
      case 0xB6:
        return this.ldx(CPU6502.zeroPageY);
      case 0xAE:
        return this.ldx(CPU6502.absolute);
      case 0xBE:
        return this.ldx(CPU6502.absoluteY);
      case 0xA0:
        return this.ldy(CPU6502.immediate);
      case 0xA4:
        return this.ldy(CPU6502.zeroPage);
      case 0xB4:
        return this.ldy(CPU6502.zeroPageX);
      case 0xAC:
        return this.ldy(CPU6502.absolute);
      case 0xBC:
        return this.ldy(CPU6502.absoluteX);
      case 0x4A:
        return this.lsr(CPU6502.accumulator);
      case 0x46:
        return this.lsr(CPU6502.zeroPage);
      case 0x56:
        return this.lsr(CPU6502.zeroPageX);
      case 0x4E:
        return this.lsr(CPU6502.absolute);
      case 0x5E:
        return this.lsr(CPU6502.absoluteX);
      case 0xEA:
        return this.nop(CPU6502.implied);
      case 0x09:
        return this.ora(CPU6502.immediate);
      case 0x05:
        return this.ora(CPU6502.zeroPage);
      case 0x15:
        return this.ora(CPU6502.zeroPageX);
      case 0x0D:
        return this.ora(CPU6502.absolute);
      case 0x1D:
        return this.ora(CPU6502.absoluteX);
      case 0x19:
        return this.ora(CPU6502.absoluteY);
      case 0x01:
        return this.ora(CPU6502.indirectX);
      case 0x11:
        return this.ora(CPU6502.indirect_Y);
      case 0x48:
        return this.pha(CPU6502.implied);
      case 0x08:
        return this.php(CPU6502.implied);
      case 0x68:
        return this.pla(CPU6502.implied);
      case 0x28:
        return this.plp(CPU6502.implied);
      case 0x2A:
        return this.rol(CPU6502.accumulator);
      case 0x26:
        return this.rol(CPU6502.zeroPage);
      case 0x36:
        return this.rol(CPU6502.zeroPageX);
      case 0x2E:
        return this.rol(CPU6502.absolute);
      case 0x3E:
        return this.rol(CPU6502.absoluteX);
      case 0x6A:
        return this.ror(CPU6502.accumulator);
      case 0x66:
        return this.ror(CPU6502.zeroPage);
      case 0x76:
        return this.ror(CPU6502.zeroPageX);
      case 0x6E:
        return this.ror(CPU6502.absolute);
      case 0x7E:
        return this.ror(CPU6502.absoluteX);
      case 0x40:
        return this.rti();
      case 0x60:
        return this.rts(CPU6502.implied);
      case 0xE9:
        return this.sbc(CPU6502.immediate);
      case 0xE5:
        return this.sbc(CPU6502.zeroPage);
      case 0xF5:
        return this.sbc(CPU6502.zeroPageX);
      case 0xED:
        return this.sbc(CPU6502.absolute);
      case 0xFD:
        return this.sbc(CPU6502.absoluteX);
      case 0xF9:
        return this.sbc(CPU6502.absoluteY);
      case 0xE1:
        return this.sbc(CPU6502.indirectX);
      case 0xF1:
        return this.sbc(CPU6502.indirect_Y);
      case 0x38:
        return this.sec(CPU6502.implied);
      case 0xF8:
        return this.sed(CPU6502.implied);
      case 0x78:
        return this.sei(CPU6502.implied);
      case 0x85:
        return this.sta(CPU6502.zeroPage);
      case 0x95:
        return this.sta(CPU6502.zeroPageX);
      case 0x8D:
        return this.sta(CPU6502.absolute);
      case 0x9D:
        return this.sta(CPU6502.absoluteX);
      case 0x99:
        return this.sta(CPU6502.absoluteY);
      case 0x81:
        return this.sta(CPU6502.indirectX);
      case 0x91:
        return this.sta(CPU6502.indirect_Y);
      case 0x86:
        return this.stx(CPU6502.zeroPage);
      case 0x96:
        return this.stx(CPU6502.zeroPageY);
      case 0x8E:
        return this.stx(CPU6502.absolute);
      case 0x84:
        return this.sty(CPU6502.zeroPage);
      case 0x94:
        return this.sty(CPU6502.zeroPageX);
      case 0x8C:
        return this.sty(CPU6502.absolute);
      case 0xAA:
        return this.tax();
      case 0xA8:
        return this.tay();
      case 0xBA:
        return this.tsx();
      case 0x8A:
        return this.txa();
      case 0x9A:
        return this.txs();
      case 0x98:
        return this.tya();
      default:
        console.log("NO OP CODE FOUND FOR "+ opCode.toString(16) +" !@#");
        this.bus.kill();
        return 1;
    }
  }

  tick () {
    var opCode;
    if (this.waitCycles > 0) {
      // Wait until cycles have passed for emulation coordination
      this.waitCycles--;
    } else {
      // Fetch next operation and execute
      opCode = this.memory[this.PC];
      // console.log("Running Opcode: ", opCode.toString(16));
      if (opCode) {
        this.waitCycles = this.execute(opCode);
        this.cycleCount += this.waitCycles;
      } else {
        // BRK operation
        this.bus.kill();
        this.waitCycles = this.execute(0);
        this.cycleCount += this.waitCycles;
      }
    }
  }

  reset () {
    this.A = 0;
    this.X = 0;
    this.Y = 0;
    this.PC = 0;
    this.S = 0xFD;
    this.P = 0x24;
    if (this.memory) {
      this.memory.fill(0x00);
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

  shiftLeft(value) {
    // 8 bit shift left
    return (value << 1) % 0x100;
  }

  shiftRight(value) {
    // 8 bit shift right
    return (value >> 1) % 0x100;
  }

  invert (num) {
    return (num ^ 0b11111111) % 256;
  }

  setPageCrossing(bool) {
    if (bool) {
      this.pageCrossed = true;
    }
  }

  getAddress(mode) {
    var address;
    this.pageCrossed = false;
    switch (mode) {
      // Immediate mode gets handled in OP's
      case CPU6502.immediate:
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
      case CPU6502.indirect:
        // Only used by JMP instruction
        address = this.read16Bits(this.read16Bits(this.PC));
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
        this.setPageCrossing(((address + this.Y) & 0xFF00) != (address & 0xFF00));
        address = (address + this.Y) % 0x10000;
        this.PC += 4;
        break;
      default:
    }
    return address;
  }

  readMemory(address) {
    return this.memory[address];
  }

  stackPointer () {
    return this.S + 0x0100;
  }

  stackPeek () {
    return this.memory[this.stackPointer() + 1];
  }

  stackPeek16 () {
    var loByte = this.memory[this.stackPointer() + 1];
    var hiByte = this.memory[this.stackPointer() + 2];
    return ((hiByte << 8) | loByte);
  }

  stackPush (val) {
    this.memory[this.stackPointer()] = val;
    this.S--;
  }

  stackPop () {
    this.S++;
    var val = this.memory[this.stackPointer()];
    // this.memory[this.stackPointer()] = 0;
    return val;
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

  isNegative (val) {
    return val & 0b10000000;
  }

  printStack () {
    var firstLine = "=>";
    for (var i = this.S; i <= 0xFF; i++) {
      if (i != this.S) {
        firstLine = "  ";
      }
      console.log(`${firstLine} ${(0x0100 + i).toString(16)}`, this.memory[0x100 + i].toString(16));
    }
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
      case CPU6502.carry:
        return (this.P & (1));
      case CPU6502.zero:
        return (this.P & (1 << 1)) >> 1;
      case CPU6502.interruptDisable:
        return (this.P & (1 << 2)) >> 2;
      case CPU6502.decimal:
        return (this.P & (1 << 3)) >> 3;
      case CPU6502.break:
        return (this.P & (1 << 4)) >> 4;
      case CPU6502.overflow:
        return (this.P & (1 << 6)) >> 6;
      case CPU6502.negative:
        return (this.P & (1 << 7)) >> 7;
      default:
        return;
    }
  }

  brk () {
    this.logOperation(null, "BRK");
    /* The BRK instruction forces the generation of an interrupt request.
     * The program counter and processor status are pushed on the stack then the
     * IRQ interrupt vector at $FFFE/F is loaded into the PC and the break
     * flag in the status set to one. */
    this.PC += 2;
    this.stackPushPC();
    this.stackPush(this.P);
    this.setFlag(CPU6502.break);
    this.PC = this.read16Bits(this.interruptVector);
    return 7; // This instruction takes 7 cycles
  }

  clc (mode) {
    // Clear Carry Flag
    this.logOperation(mode, "CLC");
    this.PC++;
    this.clearFlag(CPU6502.carry);
    return 2; // Takes 2 cycles
  }

  cld (mode) {
    // Clear Decimal Mode Flag
    this.logOperation(mode, "CLD");
    this.PC++;
    this.clearFlag(CPU6502.decimal);
    return 2; // Takes 2 cycles
  }

  cli () {
    // Clear Interrupt Flag
    this.logOperation(null, "CLI");
    this.PC++;
    this.clearFlag(CPU6502.interruptDisable);
    return 2; // Takes 2 cycles
  }

  clv (mode) {
    // Clear Overflow Flag
    this.logOperation(mode, "CLV");
    this.PC++;
    this.clearFlag(CPU6502.overflow);
    return 2; // Takes 2 cycles
  }

  dex () {
    // Decrement X register
    this.logOperation(null, "DEX");
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
    this.logOperation(null, "DEY");
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
    this.logOperation(null, "INX");
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

  iny (mode) {
    // Increment Y register
    this.logOperation(mode, "INY");
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

  nop (mode) {
    // No Operation
    this.logOperation(mode, "NOP");
    this.PC++;
    return 2;
  }

  pha (mode) {
    // Push Accumulator to Stack
    this.logOperation(mode, "PHA");
    this.PC++;
    this.stackPush(this.A);
    return 3;
  }

  php (mode) {
    // Push Status to Stack
    this.logOperation(mode, "PHP");
    this.PC++;
    this.stackPush(this.P);
    return 3;
  }

  pla (mode) {
    // Pop from Stack to register A
    this.logOperation(mode, "PLA");
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

  plp (mode) {
    // Pull Status from Stack
    // Unset break flag when doing so:
    // https://wiki.nesdev.com/w/index.php/Status_flags#The_B_flag
    // Always set bit 5, for parity with testing log
    // http://forums.nesdev.com/viewtopic.php?f=3&t=11253&p=128876&hilit=plp#p128876
    this.logOperation(mode, "PLP");
    this.PC++;
    this.P = ( this.stackPop() & 0b11101111 ) | 0b00100000;
    return 4;
  }

  rti () {
    // Return from Interrupt
    this.logOperation(null, "RTI");
    this.P = (this.stackPop() & 0b11101111 ) | 0b00100000;
    this.PC = this.stackPopPC();
    return 6;
  }

  rts (mode) {
    //Return from subroutine
    this.logOperation(mode, "RTS");
    this.PC = this.stackPopPC() + 1;
    return 6;
  }

  sec (mode) {
    // Set Carry flag
    this.logOperation(mode, "SEC");
    this.PC++;
    this.setFlag(CPU6502.carry);
    return 2;
  }

  sed (mode) {
    // Set Decimal Flag
    this.logOperation(mode, "SED");
    this.PC++;
    this.setFlag(CPU6502.decimal);
    return 2;
  }

  sei (mode) {
    // Set Interrupt Disable Flag
    this.logOperation(mode, "SEI");
    this.PC++;
    this.setFlag(CPU6502.interruptDisable);
    return 2;
  }

  tax () {
    // Transfer Accumulator to X
    this.logOperation(null, "TAX");
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
    this.logOperation(null, "TAY");
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
    this.logOperation(null, "TSX");
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
    this.logOperation(null, "TXA");
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
    this.logOperation(null, "TXS");
    this.PC++;
    this.S = this.X;
    return 2;
  }

  tya () {
    // Transfer Y to Accumulator
    this.logOperation(null, "TYA");
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

  bcc (mode) {
    // Branch if Carry Clear
    this.logOperation(mode, "BCC");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (!this.flagIsSet(CPU6502.carry)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bcs (mode) {
    // Branch if Carry Set
    this.logOperation(mode, "BCS");
    var cycles = 2;
    var originalPC = this.PC;
    this.PC++;
    var pcOffset = this.readMemory(this.PC);
    if (this.flagIsSet(CPU6502.carry)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  beq (mode) {
    // Branch if Equal
    this.logOperation(mode, "BEQ");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (this.flagIsSet(CPU6502.zero)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bne (mode) {
    // Branch if Not Equal
    this.logOperation(mode, "BNE");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (!this.flagIsSet(CPU6502.zero)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bmi (mode) {
    // Branch if Minus
    this.logOperation(mode, "BMI");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (this.flagIsSet(CPU6502.negative)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bpl (mode) {
    // Branch if Plus
    this.logOperation(mode, "BPL");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (!this.flagIsSet(CPU6502.negative)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bvc (mode) {
    // Branch if Overflow Clear
    this.logOperation(mode, "BVC");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (!this.flagIsSet(CPU6502.overflow)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bvs (mode) {
    // Branch if Overflow Set
    this.logOperation(mode, "BVS");
    var originalPC = this.PC;
    this.PC++;
    var cycles = 2;
    var pcOffset = this.readMemory(this.PC);
    if (this.flagIsSet(CPU6502.overflow)) {
      cycles += 1;
      this.PC++;
      this.PC += pcOffset;
      if((this.PC & 0xFF00 ) != (originalPC & 0xFF00)) {
        cycles += 2;
      }
    } else {
      this.PC++;
    }
    return cycles;
  }

  bit (mode) {
    // Bit test
    this.logOperation(mode, "BIT");
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
    this.logOperation(mode, "STA");
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
    console.log(`>>> Wrote ${zeroPad(this.A)} to ${targetAddress.toString(16)}`);
    return cycles;
  }

  stx(mode) {
    // Store X register to Address
    this.logOperation(mode, "STX");
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
    this.logOperation(mode, "STY");
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
    this.logOperation(mode, "AND");
    var cycles;
    var targetAddress;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (this.pageCrossed) {
      cycles++;
    }

    if (mode == CPU6502.immediate) {
      // In immediate mode, targetAddress is actually the data we want to test against
      this.A = targetAddress & this.A;
    } else {
      this.A = cpu.memory[targetAddress] & this.A;
    }


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

    return cycles;
  }

  asl(mode) {
    // Arithmetic Shift Left
    this.logOperation(mode, "ASL");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.accumulator:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    targetAddress = this.getAddress(mode);
    targetValue = this.readMemory(targetAddress);

    if (mode == CPU6502.accumulator) {
      if (this.A & 0b10000000) {
        this.setFlag(CPU6502.carry);
      } else {
        this.clearFlag(CPU6502.carry);
      }

      this.A = this.shiftLeft(this.A);

      if (this.isNegative(this.A)) {
        this.setFlag(CPU6502.negative);
      } else {
        this.clearFlag(CPU6502.negative);
      }

      if (this.A === 0) {
        this.setFlag(CPU6502.zero);
      } else {
        this.clearFlag(CPU6502.zero);
      }
    } else {
      if (targetValue & 0b10000000) {
        this.setFlag(CPU6502.carry);
      } else {
        this.clearFlag(CPU6502.carry);
      }

      this.memory[targetAddress] = this.shiftLeft(targetValue);

      targetValue = this.readMemory(targetAddress);

      if (this.isNegative(targetValue)) {
        this.setFlag(CPU6502.negative);
      } else {
        this.clearFlag(CPU6502.negative);
      }

      if (targetValue === 0) {
        this.setFlag(CPU6502.zero);
      } else {
        this.clearFlag(CPU6502.zero);
      }
    }

    return cycles;
  }

  cmp(mode) {
    // Compare Memory to the Accumulator value
    this.logOperation(mode, "CMP");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (this.pageCrossed) {
      cycles++;
    }

    if (mode == CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = cpu.readMemory(targetAddress);
    }

    // console.log("-------------------------------------------");
    // console.log(`Comparing A:${this.A} to ${targetValue}`);

    if (this.A >= targetValue) {
      this.setFlag(CPU6502.carry);
      // console.log("Is GTE/Carry");
    } else {
      this.clearFlag(CPU6502.carry);
      // console.log("Is Not GTE/Carry");
    }

    if (this.A == targetValue) {
      this.setFlag(CPU6502.zero);
      // console.log("Is Equal/Zero");
    } else {
      this.clearFlag(CPU6502.zero);
      // console.log("Is Not Equal/Zero");
    }

    if (( this.A - targetValue ) & 0b10000000) {
      this.setFlag(CPU6502.negative);
      // console.log("Is Negative");
    } else {
      this.clearFlag(CPU6502.negative);
      // console.log("Not Negative");
    }

    // console.log("-------------------------------------------");
    return cycles;
  }

  cpx (mode) {
    // Compare X register to memory address
    this.logOperation(mode, "CPX");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.absolute:
        cycles = 4;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode == CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = cpu.readMemory(targetAddress);
    }

    if (this.X >= targetValue) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (this.X == targetValue) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if ((this.X - targetValue) & 0b10000000) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return cycles;
  }

  cpy (mode) {
    // Compare Y register to memory address
    var cycles, targetAddress, targetValue;
    this.logOperation(mode, "CPY");
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.absolute:
        cycles = 4;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode == CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = cpu.readMemory(targetAddress);
    }

    if (this.Y >= targetValue) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (this.Y == targetValue) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if ((this.Y - targetValue) & 0b10000000) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return cycles;
  }

  dec (mode) {
    this.logOperation(mode, "DEC");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    targetAddress = this.getAddress(mode);
    cpu.memory[targetAddress] -= 1;
    targetValue = cpu.readMemory(targetAddress);

    if (targetValue === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    // Limit subraction to 8 bits
    if (this.isNegative(targetValue)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return cycles;
  }

  inc (mode) {
    this.logOperation(mode, "INC");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    targetAddress = this.getAddress(mode);
    cpu.memory[targetAddress] += 1;
    targetValue = cpu.readMemory(targetAddress);

    if (targetValue === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    // Limit subraction to 8 bits
    if (this.isNegative(targetValue)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return cycles;
  }

  jmp (mode) {
    // Jump PC to new address
    this.logOperation(mode, "JMP");
    this.PC++;
    var targetAddress = this.getAddress(mode)
    this.PC = targetAddress;

    switch (mode) {
      case CPU6502.absolute:
        return 3;
      case CPU6502.indirect:
        return 5;
    }
  }

  jsr (mode) {
    // Jump to subroutine
    this.logOperation(mode, "JSR");
    this.PC++;
    var targetAddress = this.getAddress(mode);
    this.PC--;
    this.stackPushPC();
    this.PC = targetAddress;
    return 6;
  }

  eor (mode) {
    this.logOperation(mode, "EOR");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode === CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    this.A = this.A ^ targetValue;

    if (this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.A === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (this.pageCrossed) {
      cycles++;
    }

    return cycles;
  }

  ora (mode) {
    this.logOperation(mode, "ORA");
    var cycles, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode === CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    this.A = this.A | targetValue;

    if (this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.A === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (this.pageCrossed) {
      cycles++;
    }

    return cycles;
  }

  rol (mode) {
    // Rotate Left
    this.logOperation(mode, "ROL");
    this.PC++;
    var cycles, targetAddress, targetValue, oldCarryBit, newCarryBit, negativeBit, shiftedValue;

    switch (mode) {
      case CPU6502.accumulator:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    if (mode === CPU6502.accumulator) {
      targetValue = this.A;
    } else {
      targetAddress = this.getAddress(mode);
      targetValue = this.readMemory(targetAddress);
    }

    negativeBit = targetValue & 0b01000000;
    newCarryBit = targetValue & 0b10000000;
    oldCarryBit = this.P & 0b00000001;
    shiftedValue = ((targetValue << 1) %  0b100000000) | oldCarryBit;

    if (newCarryBit) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (negativeBit) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (shiftedValue === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (mode === CPU6502.accumulator) {
      this.A = shiftedValue;
    } else {
      this.memory[targetAddress] = shiftedValue;
    }

    return cycles;
  }

  ror (mode) {
    // Rotate Right
    this.logOperation(mode, "ROR");
    this.PC++;
    var cycles, targetAddress, targetValue, oldCarryBit, newCarryBit, shiftedValue;

    switch (mode) {
      case CPU6502.accumulator:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    if (mode === CPU6502.accumulator) {
      targetValue = this.A;
    } else {
      targetAddress = this.getAddress(mode);
      targetValue = this.readMemory(targetAddress);
    }

    oldCarryBit = this.P & 0b00000001;
    newCarryBit = targetValue & 0b00000001;
    shiftedValue = ((targetValue >> 1) %  0b100000000)
    if (oldCarryBit) {
      shiftedValue = shiftedValue | 0b10000000;
    }

    if (newCarryBit) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (shiftedValue & 0b10000000) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (shiftedValue === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (mode === CPU6502.accumulator) {
      this.A = shiftedValue;
    } else {
      this.memory[targetAddress] = shiftedValue;
    }

    return cycles;
  }

  lda (mode) {
    this.logOperation(mode, "LDA");
    this.PC++;
    var cycles, targetAddress, targetValue;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode === CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    this.A = targetValue;

    if (this.isNegative(this.A)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.A === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (this.pageCrossed) {
      cycles++;
    }

    return cycles;
  }

  ldx (mode) {
    // Load X register
    this.logOperation(mode, "LDX");
    this.PC++;
    var cycles, targetAddress, targetValue;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageY:
      case CPU6502.absolute:
      case CPU6502.absoluteY:
        cycles = 4;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode === CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    this.X = targetValue;

    if (this.isNegative(this.X)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.X === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (this.pageCrossed) {
      cycles++;
    }

    return cycles;
  }

  ldy (mode) {
    // Load Y register
    this.logOperation(mode, "LDY");
    this.PC++;
    var cycles, targetAddress, targetValue;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 3;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
      case CPU6502.absoluteX:
        cycles = 4;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (mode === CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    this.Y = targetValue;

    if (this.isNegative(this.Y)) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    if (this.Y === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (this.pageCrossed) {
      cycles++;
    }

    return cycles;
  }

  lsr(mode) {
    // Logical Shift Right
    this.logOperation(mode, "LSR");
    var cycles, targetAddress, targetValue, shiftedValue;
    this.PC++;

    switch (mode) {
      case CPU6502.accumulator:
        cycles = 2;
        break;
      case CPU6502.zeroPage:
        cycles = 5;
        break;
      case CPU6502.zeroPageX:
      case CPU6502.absolute:
        cycles = 6;
        break;
      case CPU6502.absoluteX:
        cycles = 7;
        break;
    }

    targetAddress = this.getAddress(mode);
    targetValue = this.readMemory(targetAddress);

    if (mode == CPU6502.accumulator) {
      targetValue = this.A;
    }

    shiftedValue = this.shiftRight(targetValue);

    // Negative will never be set after LSR
    this.clearFlag(CPU6502.negative);

    if (targetValue & 0b00000001) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (shiftedValue === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (mode == CPU6502.accumulator) {
      this.A = shiftedValue;
    } else {
      this.memory[targetAddress] = shiftedValue;
    }

    return cycles;
  }

  adc (mode) {
    // Add with Carry
    this.logOperation(mode, "ADC");
    var cycles, sum, targetAddress, targetValue;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (this.pageCrossed) {
      cycles++;
    }

    if (mode == CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    sum = this.A + targetValue + this.getFlag(CPU6502.carry);

    if ( this.isNegative(this.A) && (this.isNegative(targetValue)) && !(this.isNegative(sum)) ) {
      this.setFlag(CPU6502.overflow);
    } else if ( !this.isNegative(this.A) && !this.isNegative(targetValue) && this.isNegative(sum) ) {
      this.setFlag(CPU6502.overflow);
    } else {
      this.clearFlag(CPU6502.overflow);
    }

    this.A = sum % 256;

    if (sum > 255) {
      this.setFlag(CPU6502.carry);
    } else {
      this.clearFlag(CPU6502.carry);
    }

    if (this.A === 0) {
      this.setFlag(CPU6502.zero);
    } else {
      this.clearFlag(CPU6502.zero);
    }

    if (sum & 0b10000000) {
      this.setFlag(CPU6502.negative);
    } else {
      this.clearFlag(CPU6502.negative);
    }

    return cycles;
  }

  sbc (mode) {
    // Subtract with Carry (Borrow)
    this.logOperation(mode, "SBC");
    var cycles, sum, targetAddress, targetValue, twosComplement;
    this.PC++;

    switch (mode) {
      case CPU6502.immediate:
        cycles = 2;
        break;
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
      case CPU6502.indirect_Y:
        cycles = 5;
        break;
    }

    targetAddress = this.getAddress(mode);

    if (this.pageCrossed) {
      cycles++;
    }

    // For subtraction we just add the negation
    if (mode == CPU6502.immediate) {
      targetValue = targetAddress;
    } else {
      targetValue = this.readMemory(targetAddress);
    }

    // console.log("SBC==================================");

    // Convert to twos complement addition
    twosComplement = (this.invert(targetValue) + this.getFlag(CPU6502.carry));
    sum = this.A + twosComplement;

    // console.log(this.A + " - ", targetValue, " = ", sum);

    if ( this.isNegative(this.A) && this.isNegative(twosComplement) && !(this.isNegative(sum)) ) {
      // console.log("Setting Overflow");
      this.setFlag(CPU6502.overflow);
    } else if ( !this.isNegative(this.A) && !this.isNegative(twosComplement) && this.isNegative(sum) ) {
      this.setFlag(CPU6502.overflow);
    } else {
      // console.log("UnSetting Overflow");
      this.clearFlag(CPU6502.overflow);
    }

    this.A = sum % 256;

    if ( sum > 255 ) {
      // console.log("Setting Carry");
      this.setFlag(CPU6502.carry);
    } else {
      // console.log("UnSetting Carry");
      this.clearFlag(CPU6502.carry);
    }

    if (this.A === 0) {
      // console.log("Setting Zero");
      this.setFlag(CPU6502.zero);
    } else {
      // console.log("UnSetting Zero");
      this.clearFlag(CPU6502.zero);
    }

    if (sum & 0b10000000) {
      // console.log("Setting Negative");
      this.setFlag(CPU6502.negative);
    } else {
      // console.log("UnSetting Negative");
      this.clearFlag(CPU6502.negative);
    }
    // console.log("==================================SBC");

    return cycles;
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
CPU6502.implied = Symbol('Implied Mode');
CPU6502.zeroPage = Symbol('Zero Page Mode');
CPU6502.zeroPageX = Symbol('Zero Page X Mode');
CPU6502.absolute = Symbol('Absolute Mode');
CPU6502.absoluteX = Symbol('Absolute X Mode');
CPU6502.absoluteY = Symbol('Absolute Y Mode');
CPU6502.indirect = Symbol('Indirect Mode'); // only used by JMP
CPU6502.indirectX = Symbol('Indirect X Mode');
CPU6502.indirect_Y = Symbol('(Indirect), Y Mode');
CPU6502.relative = Symbol('Relative Mode');

