class CPU6502 {
  A = 0; // Accumulator Register
  X = 0; // X Register
  Y = 0; // Y Register
  PC = null; // Program Counter
  S = 0xFD; // Stack Pointer, actually an offset to the address 0x0100 (Page 1, offset 0). 6502 uses an 'empty stack' convention, meaning that the pointer always points an empty location in the stack. The value is decremented after data is pushed, and incremented before data is popped.
  P = 0x34; // Processor State

  reset () {
    this.A = 0;
    this.X = 0;
    this.Y = 0;
    this.PC = null;
    this.S = 0xFD;
    this.P = 0x34;
  }

  stackPointer () {
    return this.S + 0x0100;
  }

  constructor (memory) {
    this.memory = memory;
  }

  stackPush (val) {
    this.memory[this.stackPointer()] = val;
    console.log(this.memory[this.stackPointer()],  'was pushed');
    this.S--;
  }

  stackPop () {
    this.S++;
    var val = this.memory[this.stackPointer()];
    this.memory[this.stackPointer()] = 0;
    return val;
  }

  printStack () {
    console.log(this.memory[this.S]);
  }

  printRegisters () {
    console.log("A:", this.A);
    console.log("X:", this.X);
    console.log("Y:", this.Y);
    console.log("PC:", this.PC);
    console.log("S:", this.S);
    console.log("P:", this.P);
  }
}


// Tests
function assertEqual (expected, actual) {
  if (expected !== actual) {
    throw `Expected does not equal Actual, expected ${expected}, got ${actual}.`;
  }
};

function testStackOperations () {
  var memory = new Uint8ClampedArray(new ArrayBuffer(65536));
  var cpu = new CPU6502(memory);
  cpu.stackPush(1);
  cpu.stackPush(2);
  cpu.stackPush(3);
  cpu.stackPush(4);
  assertEqual(4, cpu.stackPop())
  assertEqual(3, cpu.stackPop())
  assertEqual(2, cpu.stackPop())
  assertEqual(1, cpu.stackPop())
};

testStackOperations();
