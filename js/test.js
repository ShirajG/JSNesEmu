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
  // cpu.printStack();
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
  // cpu.printRegisters()
  assertEqual(testVal, cpu.PC);
  assertEqual(0x34, cpu.stackPop());
  assertEqual(true, cpu.flagIsSet(CPU6502.break));
}

function testCLCop(cpu) {
  assertEqual(0b00110100, cpu.P);
  cpu.P = (cpu.P | 0b00000001);
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  cpu.clc();
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
}

function testCLDop(cpu) {
  assertEqual(false, cpu.flagIsSet(CPU6502.decimal));
  cpu.P = (cpu.P | 0b00001000);
  assertEqual(true, cpu.flagIsSet(CPU6502.decimal));
  cpu.cld();
  assertEqual(false, cpu.flagIsSet(CPU6502.decimal));
}

function testCLIop(cpu) {
  cpu.P = (cpu.P | 0b00000100);
  assertEqual(true, cpu.flagIsSet(CPU6502.interruptDisable));
  cpu.cli();
  assertEqual(false, cpu.flagIsSet(CPU6502.interruptDisable));
}

function testCLVop(cpu) {
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  cpu.P = (cpu.P | 0b01000000);
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
  cpu.clv();
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
}

function testDEXop(cpu) {
  cpu.X = 255;
  cpu.dex();
  assertEqual(254, cpu.X);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  cpu.X = 64;
  cpu.dex();
  assertEqual(63, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  cpu.X = 1;
  cpu.dex();
  assertEqual(0, cpu.X);
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  cpu.dex();
  assertEqual(255, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
}

function testDEYop(cpu) {
  cpu.Y = 255;
  cpu.dey();
  assertEqual(254, cpu.Y);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  cpu.Y = 64;
  cpu.dey();
  assertEqual(63, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  cpu.Y = 1;
  cpu.dey();
  assertEqual(0, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  cpu.dey();
  assertEqual(255, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
}

function testINXop(cpu) {
  cpu.X = 254;
  cpu.inx();
  assertEqual(255, cpu.X);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.X = 255;
  cpu.inx();
  assertEqual(0, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  cpu.X = 64;
  cpu.inx();
  assertEqual(65, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
}

function testINYop(cpu) {
  cpu.Y = 254;
  cpu.iny();
  assertEqual(255, cpu.Y);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.Y = 255;
  cpu.iny();
  assertEqual(0, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  cpu.Y = 64;
  cpu.iny();
  assertEqual(65, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
}

function testNOPop(cpu) {
  var oldPC = cpu.PC;
  cpu.nop();
  assertEqual(oldPC + 1, cpu.PC);
}

function testPHAop(cpu) {
  cpu.A = 128;
  cpu.pha();
  assertEqual(128, cpu.stackPeek());
}

function testPHPop(cpu) {
  cpu.php();
  assertEqual(cpu.P, cpu.stackPeek());
}

function testPLAop(cpu) {
  cpu.stackPush(64);
  cpu.pla();
  assertEqual(64, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));

  cpu.stackPush(0);
  cpu.pla();
  assertEqual(0, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));

  cpu.stackPush(255);
  cpu.pla();
  assertEqual(255, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
}

function testPLPop(cpu) {
  cpu.stackPush(255);
  cpu.plp();
  assertEqual(255, cpu.P);
}

function testRTIop(cpu) {
  cpu.PC = 0b1111111101010101;
  cpu.stackPushPC();
  cpu.stackPush(0b01010101);
  cpu.rti();
  cpu.printRegisters()
  assertEqual(0b01010101, cpu.P);
  assertEqual(0b1111111101010101, cpu.PC);
}

var cpu = new CPU6502(new Uint8Array(new ArrayBuffer(65536)));
testStackOperations(cpu);
cpu.reset();
testReading16Bits(cpu);
cpu.reset();
testWriting16Bits(cpu);
testBRKop(cpu);
cpu.reset();
testCLCop(cpu);
cpu.reset();
testCLDop(cpu);
cpu.reset();
testCLIop(cpu);
cpu.reset();
testCLVop(cpu);
cpu.reset();
testDEXop(cpu);
cpu.reset();
testDEYop(cpu);
cpu.reset();
testINXop(cpu);
cpu.reset();
testINYop(cpu);
cpu.reset();
testNOPop(cpu);
cpu.reset();
testPHAop(cpu);
cpu.reset();
testPHPop(cpu);
cpu.reset();
testPLAop(cpu);
cpu.reset();
testPLPop(cpu);
cpu.reset();
testRTIop(cpu);

// If we get here none of the tests failed...
(function(){
  var graf = document.createElement('p');
  graf.classList += " success";
  graf.innerText = "All Tests passed";
  document.body.appendChild(graf);
})()
