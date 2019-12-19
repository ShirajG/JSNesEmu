class CPU6502 {
  A = 0; // Accumulator Register
  X = 0; // X Register
  Y = 0; // Y Register
  PC = null; // Program Counter
  S = 0xFF; // Stack Pointer, actually an offset to the address 0x0100 (Page 1, offset 0). 6502 uses an 'empty stack' convention, meaning that the pointer always points an empty location in the stack. The value is decremented after data is pushed, and incremented before data is popped. Docs says to initialize this to 0xFD, but I'm going with 0xFF for now
  P = 0x34; // Processor State

  adc (mode) {
    console.log("Add with Carry", mode);
  }

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

  printRegisters () {
    console.log("A:", this.A);
    console.log("X:", this.X);
    console.log("Y:", this.Y);
    console.log("PC:", this.PC);
    console.log("S:", this.S);
    console.log("P:", this.P);
  }

  runOp (opCode) {
    switch (opCode) {
      case 0x61:
        this.adc(CPU6502.indirectX);
        break;
      case 0x65:
        this.adc(CPU6502.zeroPage);
        break;
      case 0x69:
        this.adc(CPU6502.immediate);
        break;
      case 0x6D:
        this.adc(CPU6502.absolute);
        break;
      case 0x71:
        this.adc(CPU6502.indirect_Y);
        break;
      case 0x75:
        this.adc(CPU6502.zeroPageX);
        break;
      case 0x79:
        this.adc(CPU6502.absoluteY);
        break;
      case 0x7D:
        this.adc(CPU6502.absoluteX);
        break;
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

function testStackOperations () {
  var memory = new Uint8Array(new ArrayBuffer(65536));
  var cpu = new CPU6502(memory);
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

function testAddWithCarry () {
  var memory = new Uint8Array(new ArrayBuffer(65536));
  var cpu = new CPU6502(memory);
  cpu.PC = 0;
  memory[0] = 0x61;
  cpu.run();
  memory[0] = 0x65;
  cpu.run();
  memory[0] = 0x69
  cpu.run();
  memory[0] = 0x6D
  cpu.run();
  memory[0] = 0x71
  cpu.run();
  memory[0] = 0x75
  cpu.run();
  memory[0] = 0x79
  cpu.run();
  memory[0] = 0x7D
  cpu.run();
}

testStackOperations();
testAddWithCarry();

(function(){
  var graf = document.createElement('p');
  graf.innerText = "All Tests passed";
  document.body.appendChild(graf);
})()
