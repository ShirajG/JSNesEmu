class CPU6502 {
  interruptVector = 0xFFFE; // 0xFFFE and 0xFFFF will store a 16 bit address to jump to on interrupt
  A = 0; // Accumulator Register
  X = 0; // X Register
  Y = 0; // Y Register
  P = 0x34; // Processor Status Flags
  PC = null; // Program Counter
  S = 0xFD; // Stack Pointer, actually an offset to the address 0x0100 (Page 1, offset 0). 6502 uses an 'empty stack' convention, meaning that the pointer always points an empty location in the stack. The value is decremented after data is pushed, and incremented before data is popped.

  constructor (memory) {
    this.memory = memory;
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

  setFlag(flag) {
    switch (flag) {
      case CPU6502.break:
        // Sets the  break flag to on
        this.P = (this.P | (1 << 4))
        break;
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
    this.stackPush(this.PC);
    this.stackPush(this.P);
    this.PC = this.read16Bits(this.interruptVector);
    this.setFlag(CPU6502.break);
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

  printStack () {
    for (var i = this.S; i <= 0xFF; i++) {
      console.log(`Stack Address ${(0x0100 + i).toString(16)}`, this.memory[0x100 + i]);
    }
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
}

/* Symbols for each Status Flag
 *
 *
 *
 */
CPU6502.carry = Symbol('Carry Flag');
CPU6502.zero = Symbol('Zero Flag');
CPU6502.interruptDisable = Symbol('Interrupt Disable Flag');
CPU6502.decimal = Symbol('Decimal Mode Flag');
CPU6502.break = Symbol('Break Flag');
CPU6502.overflow = Symbol('Overflow Flag');
CPU6502.negative = Symbol('Negative Flag');

// Symbols for each Addressing Mode
CPU6502.accumulator = Symbol('Accumulator Mode');
CPU6502.immediate = Symbol('Immediate Mode');
CPU6502.zeroPage = Symbol('Zero Page Mode');
CPU6502.zeroPageX = Symbol('Zero Page X Mode');
CPU6502.absolute = Symbol('Absolute Mode');
CPU6502.absoluteX = Symbol('Absolute X Mode');
CPU6502.absoluteY = Symbol('Absolute Y Mode');
CPU6502.indirectX = Symbol('Indirect X Mode');
CPU6502.indirect_Y = Symbol('(Indirect), Y Mode');

// Tests
function assertEqual (expected, actual) {
  if (expected !== actual) {
    throw `Expected does not equal Actual, expected ${expected}, got ${actual}.`;
  }
};

function testStackOperations (cpu) {
  cpu.stackPush(1);
  cpu.stackPush(2);
  cpu.stackPush(3);
  cpu.stackPush(4);
  cpu.printStack();
  assertEqual(4, cpu.stackPop())
  assertEqual(3, cpu.stackPop())
  assertEqual(2, cpu.stackPop())
  assertEqual(1, cpu.stackPop())
};

function testReading16Bits(cpu) {
  cpu.memory[10] = 0b11110000;
  cpu.memory[11] = 0b11110000;
  assertEqual(0b1111000011110000, cpu.read16Bits(10));
  cpu.memory[12] = 0b10110101;
  cpu.memory[13] = 0b11100001;
  assertEqual(0b1110000110110101, cpu.read16Bits(12));
}

function testWriting16Bits(cpu) {
  cpu.write16Bits(0xFE, 0b1111000010101010);
  assertEqual(0b11110000, cpu.memory[0xFF])
  assertEqual(0b10101010, cpu.memory[0xFE])
}

function testBRKop(cpu) {
  var testVal = 0b1010101000001111
  assertEqual(null, cpu.PC);
  cpu.write16Bits(cpu.interruptVector, testVal);
  cpu.brk();
  assertEqual(testVal, cpu.PC);
  assertEqual(0x34, cpu.stackPop());
  assertEqual(0b10000, cpu.getFlag(CPU6502.break));
}

var cpu = new CPU6502(new Uint8Array(new ArrayBuffer(65536)));
testStackOperations(cpu);
cpu.reset();
testReading16Bits(cpu);
cpu.reset();
testWriting16Bits(cpu);
testBRKop(cpu);
cpu.reset();

// If we get here none of the tests failed...
(function(){
  var graf = document.createElement('p');
  graf.innerText = "All Tests passed";
  document.body.appendChild(graf);
})()
