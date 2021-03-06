// Tests
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
  // cpu.printRegisters()
  assertEqual(0b01010101, cpu.P);
  assertEqual(0b1111111101010101, cpu.PC);
}

function testRTSop(cpu) {
  cpu.PC = 0b1010101011111110;
  cpu.stackPushPC();
  cpu.PC = 0;
  cpu.rts();
  assertEqual(0b1010101011111111, cpu.PC);
}

function testSECop(cpu) {
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  cpu.sec();
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
}

function testSEDop(cpu) {
  assertEqual(false, cpu.flagIsSet(CPU6502.decimal));
  cpu.sed();
  assertEqual(true, cpu.flagIsSet(CPU6502.decimal));
}

function testSEIop(cpu) {
  cpu.P = 0;
  assertEqual(false, cpu.flagIsSet(CPU6502.interruptDisable));
  cpu.sei();
  assertEqual(true, cpu.flagIsSet(CPU6502.interruptDisable));
}

function testTAXop(cpu) {
  cpu.A = 255;
  cpu.tax();
  assertEqual(255, cpu.X);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.A = 0;
  cpu.tax();
  assertEqual(0, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
}

function testTAYop(cpu) {
  cpu.A = 255;
  cpu.tay();
  assertEqual(255, cpu.Y);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.A = 0;
  cpu.tay();
  assertEqual(0, cpu.Y);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
}

function testTSXop(cpu) {
  cpu.S = 255;
  cpu.tsx();
  assertEqual(255, cpu.X);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.S = 0;
  cpu.tsx();
  assertEqual(0, cpu.X);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
}

function testTXAop(cpu) {
  cpu.X = 255;
  cpu.txa();
  assertEqual(255, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.X = 0;
  cpu.txa();
  assertEqual(0, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
}

function testTXSop(cpu) {
  cpu.X = 255;
  cpu.txs();
  assertEqual(255, cpu.S);
}

function testTYAop(cpu) {
  cpu.Y = 255;
  cpu.tya();
  assertEqual(255, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.Y = 0;
  cpu.tya();
  assertEqual(0, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
}

function testBCCop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  assertEqual(5, cpu.bcc());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.carry);
  assertEqual(2, cpu.bcc());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.clearFlag(CPU6502.carry);
  assertEqual(3, cpu.bcc());
}

function testBCSop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  assertEqual(2, cpu.bcs());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.carry);
  assertEqual(5, cpu.bcs());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.setFlag(CPU6502.carry);
  assertEqual(3, cpu.bcs());
}

function testBEQop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.zero);
  assertEqual(2, cpu.beq());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.zero);
  assertEqual(5, cpu.beq());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.setFlag(CPU6502.zero);
  assertEqual(3, cpu.beq());
}

function testBNEop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.zero);
  assertEqual(5, cpu.bne());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.zero);
  assertEqual(2, cpu.bne());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.clearFlag(CPU6502.zero);
  assertEqual(3, cpu.bne());
}

function testBMIop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.negative);
  assertEqual(2, cpu.bmi());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.negative);
  assertEqual(5, cpu.bmi());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.setFlag(CPU6502.negative);
  assertEqual(3, cpu.bmi());
}

function testBPLop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.negative);
  assertEqual(5, cpu.bpl());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.negative);
  assertEqual(2, cpu.bpl());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.clearFlag(CPU6502.negative);
  assertEqual(3, cpu.bpl());
}

function testBVCop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.overflow);
  assertEqual(5, cpu.bvc());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.overflow);
  assertEqual(2, cpu.bvc());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.clearFlag(CPU6502.overflow);
  assertEqual(3, cpu.bvc());
}

function testBVSop(cpu) {
  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.clearFlag(CPU6502.overflow);
  assertEqual(2, cpu.bvs());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x00FF;
  cpu.setFlag(CPU6502.overflow);
  assertEqual(5, cpu.bvs());

  cpu.PC = 0xFE01;
  cpu.memory[0xFE02] = 0x0011;
  cpu.setFlag(CPU6502.overflow);
  assertEqual(3, cpu.bvs());
}

function testBITop(cpu) {
  cpu.A = 0b00010000;
  cpu.PC = 0;
  cpu.memory[1] = 0b00000010;
  cpu.memory[2] = 0b00110010;
  assertEqual(3, cpu.bit(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));

  cpu.A = 0b00010000;
  cpu.PC = 0;
  cpu.memory[1] = 0b00000010;
  cpu.memory[2] = 0b11100010;
  assertEqual(3, cpu.bit(CPU6502.zeroPage));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));

  cpu.A = 0b00010000;
  cpu.PC = 0;
  cpu.memory[1] = 0b00000011;
  cpu.memory[2] = 0b00000000;
  cpu.memory[3] = 0b00011010;
  assertEqual(4, cpu.bit(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));

  cpu.A = 0b00010000;
  cpu.PC = 0;
  cpu.memory[1] = 0b00000011;
  cpu.memory[2] = 0b00000000;
  cpu.memory[3] = 0b11001010;
  assertEqual(4, cpu.bit(CPU6502.absolute));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
}

function testZeroPageAddressing(cpu) {
  cpu.PC = 0;
  cpu.memory[0] = 0x83;
  assertEqual(0x83,cpu.getAddress(CPU6502.zeroPage))
}

function testZeroPageXAddressing(cpu) {
  cpu.PC = 0;
  cpu.X = 0x10;
  cpu.memory[0] = 0x83;
  assertEqual(0x93,cpu.getAddress(CPU6502.zeroPageX))

  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.memory[0] = 0xFF;
  assertEqual(0x0,cpu.getAddress(CPU6502.zeroPageX))

  cpu.PC = 0;
  cpu.X = 0xDD;
  cpu.memory[0] = 0xEE;
  assertEqual(0xCB,cpu.getAddress(CPU6502.zeroPageX))
}

function testZeroPageYAddressing(cpu) {
  cpu.PC = 0;
  cpu.Y = 0x10;
  cpu.memory[0] = 0x83;
  assertEqual(0x93,cpu.getAddress(CPU6502.zeroPageY))

  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.memory[0] = 0xFF;
  assertEqual(0x0,cpu.getAddress(CPU6502.zeroPageY))

  cpu.PC = 0;
  cpu.Y = 0xDD;
  cpu.memory[0] = 0xEE;
  assertEqual(0xCB,cpu.getAddress(CPU6502.zeroPageY))
}

function testAbsoluteAddressing(cpu) {
  cpu.PC = 0;
  cpu.write16Bits(0, 0xFAFA);
  assertEqual(0xFAFA,cpu.getAddress(CPU6502.absolute))
}

function testAbsoluteXAddressing(cpu) {
  cpu.PC = 0;
  cpu.X = 0xFF;
  cpu.write16Bits(0, 0xFAFA);
  assertEqual(0xFBF9, cpu.getAddress(CPU6502.absoluteX))

  cpu.PC = 0;
  cpu.X = 0xFF;
  cpu.write16Bits(0, 0xFFFA);
  assertEqual(0x00F9, cpu.getAddress(CPU6502.absoluteX))
}

function testAbsoluteYAddressing(cpu) {
  cpu.PC = 0;
  cpu.Y = 0xFF;
  cpu.write16Bits(0, 0xFAFA);
  assertEqual(0xFBF9, cpu.getAddress(CPU6502.absoluteY));

  cpu.PC = 0;
  cpu.Y = 0xFF;
  cpu.write16Bits(0, 0xFFFA);
  assertEqual(0x00F9, cpu.getAddress(CPU6502.absoluteY));
}

function testIndirectXAddressing(cpu) {
  cpu.PC = 0;
  cpu.X = 0xE;
  cpu.memory[0] = 0xF0;
  cpu.write16Bits(0xFE, 0xFA27);
  assertEqual(0xFA27, cpu.getAddress(CPU6502.indirectX));

  /* Test wraparound */
  cpu.PC = 0;
  cpu.X = 0xFF;
  cpu.memory[0] = 0x30;
  cpu.write16Bits(0x2F, 0xFA27);
  assertEqual(0xFA27, cpu.getAddress(CPU6502.indirectX));
}

function testIndirectYAddressing(cpu) {
  cpu.PC = 1;
  cpu.Y = 0x04;
  cpu.memory[1] = 0x24;
  cpu.write16Bits(0x24, 0xFA73);
  assertEqual(0xFA77, cpu.getAddress(CPU6502.indirect_Y));

  /* Test Wraparound */
  cpu.reset();
  cpu.PC = 1;
  cpu.Y = 0xFF;
  cpu.memory[1] = 0x04;
  cpu.write16Bits(0x04, 0xFF73);
  assertEqual(0x72, cpu.getAddress(CPU6502.indirect_Y));
}

function testSTAop(cpu) {
  // tests STA $03
  cpu.A = 0xF1;
  cpu.memory[1] = 0x03;
  cpu.sta(CPU6502.zeroPage);
  assertEqual(cpu.A, cpu.memory[0x03]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.X = 0x02;
  cpu.memory[1] = 0x02;
  cpu.sta(CPU6502.zeroPageX);
  assertEqual(cpu.A, cpu.memory[0x04]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.write16Bits(0x0001, 0x1234);
  cpu.sta(CPU6502.absolute);
  assertEqual(cpu.A, cpu.memory[0x1234]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.X = 0x02;
  cpu.write16Bits(0x0001, 0x1234);
  cpu.sta(CPU6502.absoluteX);
  assertEqual(cpu.A, cpu.memory[0x1236]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.Y = 0x02;
  cpu.write16Bits(0x0001, 0x1234);
  cpu.sta(CPU6502.absoluteY);
  assertEqual(cpu.A, cpu.memory[0x1236]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.X = 0x02;
  cpu.memory[0x0001] = 0x0034;
  cpu.write16Bits(0x0036, 0xFAF0);
  cpu.sta(CPU6502.indirectX);
  assertEqual(cpu.A, cpu.memory[0xFAF0]);

  cpu.reset();
  cpu.A = 0xF1;
  cpu.Y = 0x02;
  cpu.memory[0x0001] = 0x0034;
  cpu.write16Bits(0x0034, 0xFAF0);
  cpu.sta(CPU6502.indirect_Y);
  assertEqual(cpu.A, cpu.memory[0xFAF2]);
}

function testSTXop(cpu) {
  cpu.X = 0xF1;
  cpu.memory[1] = 0x03;
  cpu.stx(CPU6502.zeroPage);
  assertEqual(cpu.X, cpu.memory[0x03]);

  cpu.reset();
  cpu.X = 0xF1;
  cpu.Y = 0x01;
  cpu.memory[1] = 0x03;
  cpu.stx(CPU6502.zeroPageY);
  assertEqual(cpu.X, cpu.memory[0x04]);

  cpu.reset();
  cpu.X = 0xF1;
  cpu.write16Bits(1, 0xEA73);
  cpu.stx(CPU6502.absolute);
  assertEqual(cpu.X, cpu.memory[0xEA73]);
}

function testSTYop(cpu) {
  cpu.Y = 0xF1;
  cpu.memory[1] = 0x03;
  cpu.sty(CPU6502.zeroPage);
  assertEqual(cpu.Y, cpu.memory[0x03]);

  cpu.reset();
  cpu.Y = 0xF1;
  cpu.X = 0x01;
  cpu.memory[1] = 0x03;
  cpu.sty(CPU6502.zeroPageX);
  assertEqual(cpu.Y, cpu.memory[0x04]);

  cpu.reset();
  cpu.Y = 0xF1;
  cpu.write16Bits(1, 0xEA73);
  cpu.sty(CPU6502.absolute);
  assertEqual(cpu.Y, cpu.memory[0xEA73]);
}

function testANDop(cpu) {
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0x0F;
  assertEqual(2, cpu.and(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0xF0;
  assertEqual(2, cpu.and(CPU6502.immediate));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[0x34] = 0x80;
  cpu.memory[1] = 0x34;
  assertEqual(3, cpu.and(CPU6502.zeroPage));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0x34;
  cpu.X = 0x01;
  cpu.memory[0x35] = 0x0F;
  assertEqual(4, cpu.and(CPU6502.zeroPageX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.write16Bits(1,0x0BB8);
  cpu.memory[0x0BB8] = 0xF0;
  assertEqual(4, cpu.and(CPU6502.absolute));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.X = 0x01;
  cpu.write16Bits(1,0x0BB7);
  cpu.memory[0x0BB8] = 0x0F;
  assertEqual(4, cpu.and(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.X = 0x01;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.and(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BB7);
  cpu.memory[0x0BB8] = 0xF0;
  assertEqual(4, cpu.and(CPU6502.absoluteY));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.and(CPU6502.absoluteY));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.memory[0x01] = 0x0F;
  cpu.X = 0x01;
  cpu.write16Bits(0x10, 0x0BFF);
  cpu.memory[0x0BFF] = 0x1F;
  assertEqual(6, cpu.and(CPU6502.indirectX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFE);
  cpu.memory[0x0BFF] = 0xFF;
  assertEqual(5, cpu.and(CPU6502.indirect_Y));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(6, cpu.and(CPU6502.indirect_Y));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
}

function testASLop(cpu) {
  cpu.A = 0b10000000;
  assertEqual(2, cpu.asl(CPU6502.accumulator));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(0, cpu.A);

  cpu.reset();
  cpu.A = 0b11000000;
  assertEqual(2, cpu.asl(CPU6502.accumulator));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(128, cpu.A);

  cpu.reset();
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0b11000000;
  assertEqual(5, cpu.asl(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(128, cpu.memory[0xF1]);

  cpu.reset();
  cpu.X = 1;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b11000000;
  assertEqual(6, cpu.asl(CPU6502.zeroPageX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(128, cpu.memory[0xF1]);

  cpu.reset();
  cpu.write16Bits(1, 0xF0);
  cpu.memory[0xF0] = 0b11000000;
  assertEqual(6, cpu.asl(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(128, cpu.memory[0xF0]);

  cpu.reset();
  cpu.X = 1;
  cpu.write16Bits(1, 0xF0);
  cpu.memory[0xF1] = 0b11000000;
  assertEqual(7, cpu.asl(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(128, cpu.memory[0xF1]);
}

function testCMPop(cpu) {
  cpu.memory[1] = 0x04;
  cpu.A = 0x07;
  assertEqual(2, cpu.cmp(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.memory[1] = 0xF1;
  cpu.A = 0x01;
  assertEqual(2, cpu.cmp(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFF;
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0xF0;
  assertEqual(3, cpu.cmp(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.X = 0x01
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0xF0;
  assertEqual(4, cpu.cmp(CPU6502.zeroPageX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.write16Bits(1, 0xEE01);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(4, cpu.cmp(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.X = 0x01;
  cpu.write16Bits(1, 0xEE00);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(4, cpu.cmp(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.X = 0x01;
  cpu.write16Bits(1, 0xEEFF);
  cpu.memory[0xEF00] = 0xF0;
  assertEqual(5, cpu.cmp(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0xEE00);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(4, cpu.cmp(CPU6502.absoluteY));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0xEEFF);
  cpu.memory[0xEF00] = 0xF0;
  assertEqual(5, cpu.cmp(CPU6502.absoluteY));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.X = 0x02;
  cpu.memory[1] = 0xFD;
  cpu.write16Bits(0xFF, 0xEE01);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(6, cpu.cmp(CPU6502.indirectX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.Y = 0x02;
  cpu.memory[1] = 0xFD;
  cpu.write16Bits(0xFD, 0xEE01);
  cpu.memory[0xEE03] = 0xF0;
  assertEqual(5, cpu.cmp(CPU6502.indirect_Y));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.A = 0xFE;
  cpu.Y = 0x01;
  cpu.memory[1] = 0xFD;
  cpu.write16Bits(0xFD, 0xEEFF);
  cpu.memory[0xEF00] = 0xF0;
  assertEqual(6, cpu.cmp(CPU6502.indirect_Y));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))
}

function testCPXop(cpu) {
  cpu.memory[1] = 0x04;
  cpu.X = 0x07;
  assertEqual(2, cpu.cpx(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.X = 0xFF;
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0xF0;
  assertEqual(3, cpu.cpx(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.X = 0xFE;
  cpu.write16Bits(1, 0xEE01);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(4, cpu.cpx(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))
}

function testCPYop(cpu) {
  cpu.memory[1] = 0x04;
  cpu.Y = 0x07;
  assertEqual(2, cpu.cpy(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.Y = 0xFF;
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0xF0;
  assertEqual(3, cpu.cpy(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))

  cpu.reset();
  cpu.Y = 0xFE;
  cpu.write16Bits(1, 0xEE01);
  cpu.memory[0xEE01] = 0xF0;
  assertEqual(4, cpu.cpy(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))
}

function testDECop(cpu) {
  cpu.memory[0x0001] = 0x34;
  cpu.memory[0x0034] = 100;
  assertEqual(5, cpu.dec(CPU6502.zeroPage));
  assertEqual(99, cpu.memory[0x0034]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.X = 1;
  cpu.memory[0x0001] = 0x33;
  cpu.memory[0x0034] = 1;
  assertEqual(6, cpu.dec(CPU6502.zeroPageX));
  assertEqual(0, cpu.memory[0x0034]);
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.write16Bits(1, 0xABCD);
  cpu.memory[0xABCD] = 0;
  assertEqual(6, cpu.dec(CPU6502.absolute));
  assertEqual(255, cpu.memory[0xABCD]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.X = 1;
  cpu.write16Bits(1, 0xABCC);
  cpu.memory[0xABCD] = 255;
  assertEqual(7, cpu.dec(CPU6502.absoluteX));
  assertEqual(254, cpu.memory[0xABCD]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
}

function testINCop(cpu) {
  cpu.memory[0x0001] = 0x34;
  cpu.memory[0x0034] = 100;
  assertEqual(5, cpu.inc(CPU6502.zeroPage));
  assertEqual(101, cpu.memory[0x0034]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.X = 1;
  cpu.memory[0x0001] = 0x33;
  cpu.memory[0x0034] = 127;
  assertEqual(6, cpu.inc(CPU6502.zeroPageX));
  assertEqual(128, cpu.memory[0x0034]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.write16Bits(1, 0xABCD);
  cpu.memory[0xABCD] = 255;
  assertEqual(6, cpu.inc(CPU6502.absolute));
  assertEqual(0, cpu.memory[0xABCD]);
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.X = 1;
  cpu.write16Bits(1, 0xABCC);
  cpu.memory[0xABCD] = 254;
  assertEqual(7, cpu.inc(CPU6502.absoluteX));
  assertEqual(255, cpu.memory[0xABCD]);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
}

function testJMPop(cpu) {
  cpu.PC = 0;
  cpu.write16Bits(1, 0xABCD);
  assertEqual(3, cpu.jmp(CPU6502.absolute));
  assertEqual(0xABCD, cpu.PC);

  cpu.PC = 0;
  cpu.write16Bits(1, 0xABCD);
  cpu.write16Bits(0xABCD, 0xDEAD);
  assertEqual(5, cpu.jmp(CPU6502.indirect));
  assertEqual(0xDEAD, cpu.PC);
}

function testJSRop(cpu) {
  cpu.PC = 0xDEED;
  cpu.write16Bits(0xDEED, 0x0B0B);
  assertEqual(6, cpu.jsr(CPU6502.absolute));
  assertEqual(0x0B0B, cpu.PC);
  // PC should be incremented by 2 and then pushed to stack
  assertEqual(0xDEEF, cpu.stackPeek16());
}

function testEORop(cpu) {
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0x0F;
  assertEqual(2, cpu.eor(CPU6502.immediate));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0xF0;
  assertEqual(2, cpu.eor(CPU6502.immediate));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.PC = 0;
  cpu.memory[1] = 0x34;
  cpu.memory[0x34] = 0x0F;
  assertEqual(3, cpu.eor(CPU6502.zeroPage));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.X = 0x01;
  cpu.PC = 0;
  cpu.memory[1] = 0x34;
  cpu.memory[0x35] = 0x0F;
  assertEqual(4, cpu.eor(CPU6502.zeroPageX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.write16Bits(1,0x0BB8);
  cpu.memory[0x0BB8] = 0xF0;
  cpu.A = 0xF0;
  assertEqual(4, cpu.eor(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.PC = 0;
  cpu.write16Bits(1, 0x0BB7);
  cpu.X = 0x01;
  cpu.memory[0x0BB8] = 0x0F;
  assertEqual(4, cpu.eor(CPU6502.absoluteX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.A = 0xF0;
  cpu.X = 0x01;
  cpu.PC = 0;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.eor(CPU6502.absoluteX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.reset();
  cpu.A = 0xF0;
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BB7);
  cpu.memory[0x0BB8] = 0xF0;
  assertEqual(4, cpu.eor(CPU6502.absoluteY));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.eor(CPU6502.absoluteY));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(255, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.memory[0x01] = 0x0F;
  cpu.X = 0x01;
  cpu.write16Bits(0x10, 0x0BFF);
  cpu.memory[0x0BFF] = 0x1F;
  assertEqual(6, cpu.eor(CPU6502.indirectX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(224, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFE);
  cpu.memory[0x0BFF] = 0xFF;
  assertEqual(5, cpu.eor(CPU6502.indirect_Y));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
  assertEqual(0, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(6, cpu.eor(CPU6502.indirect_Y));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
}

function testROLop(cpu) {
  cpu.PC = 0;
  cpu.setFlag(CPU6502.carry);
  cpu.A = 0b01111111;
  assertEqual(2, cpu.rol(CPU6502.accumulator));
  assertEqual(0b11111111, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.carry))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.clearFlag(CPU6502.carry);
  cpu.A = 0b01111111;
  assertEqual(2, cpu.rol(CPU6502.accumulator));
  assertEqual(0b11111110, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.setFlag(CPU6502.carry);
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0b01000000;
  assertEqual(5, cpu.rol(CPU6502.zeroPage));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(0b10000001, cpu.memory[0xF1]);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 1;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b01000000;
  assertEqual(6, cpu.rol(CPU6502.zeroPageX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(0b10000000, cpu.memory[0xF1]);

  cpu.reset();
  cpu.PC = 0;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF0] = 0b00000011;
  assertEqual(6, cpu.rol(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(0b00000110, cpu.memory[0xF0]);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 1;
  cpu.setFlag(CPU6502.carry);
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b00000011;
  assertEqual(7, cpu.rol(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(0b00000111, cpu.memory[0xF1]);
}

function testRORop(cpu) {
  cpu.PC = 0;
  cpu.setFlag(CPU6502.carry);
  cpu.A = 0b01111111;
  assertEqual(2, cpu.ror(CPU6502.accumulator));
  assertEqual(0b10111111, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.carry))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))

  cpu.reset();
  cpu.clearFlag(CPU6502.carry);
  cpu.A = 0b01111111;
  assertEqual(2, cpu.ror(CPU6502.accumulator));
  assertEqual(0b00111111, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.setFlag(CPU6502.carry);
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0b01000000;
  assertEqual(5, cpu.ror(CPU6502.zeroPage));
  assertEqual(0b10100000, cpu.memory[0xF1]);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 1;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b01000001;
  assertEqual(6, cpu.ror(CPU6502.zeroPageX));
  assertEqual(0b00100000, cpu.memory[0xF1]);
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));

  cpu.reset();
  cpu.PC = 0;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF0] = 0b00000011;
  assertEqual(6, cpu.ror(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(0b00000001, cpu.memory[0xF0]);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 1;
  cpu.setFlag(CPU6502.carry);
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b00000011;
  assertEqual(7, cpu.ror(CPU6502.absoluteX));
  assertEqual(0b10000001, cpu.memory[0xF1]);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
}

function testORAop(cpu) {
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0x0F;
  assertEqual(2, cpu.ora(CPU6502.immediate));
  assertEqual(0xFF, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.memory[1] = 0xF0;
  assertEqual(2, cpu.ora(CPU6502.immediate));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.PC = 0;
  cpu.memory[1] = 0x34;
  cpu.memory[0x34] = 0x0F;
  assertEqual(3, cpu.ora(CPU6502.zeroPage));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.X = 0x01;
  cpu.PC = 0;
  cpu.memory[1] = 0x34;
  cpu.memory[0x35] = 0x0F;
  assertEqual(4, cpu.ora(CPU6502.zeroPageX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.write16Bits(1,0x0BB8);
  cpu.memory[0x0BB8] = 0x00;
  cpu.A = 0x00;
  assertEqual(4, cpu.ora(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.A = 0xF0;
  cpu.PC = 0;
  cpu.write16Bits(1, 0x0BB7);
  cpu.X = 0x01;
  cpu.memory[0x0BB8] = 0x0F;
  assertEqual(4, cpu.ora(CPU6502.absoluteX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.A = 0b00001111;
  cpu.X = 0x01;
  cpu.PC = 0;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.ora(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));

  cpu.reset();
  cpu.A = 0x0F;
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BB7);
  cpu.memory[0x0BB8] = 0x0F;
  assertEqual(4, cpu.ora(CPU6502.absoluteY));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))

  // Test extra cycle on page crossing
  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xF0;
  cpu.Y = 0x01;
  cpu.write16Bits(1,0x0BFF);
  cpu.memory[0x0C00] = 0x0F;
  assertEqual(5, cpu.ora(CPU6502.absoluteY));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(255, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.memory[0x01] = 0x0F;
  cpu.X = 0x01;
  cpu.write16Bits(0x10, 0x0BFF);
  cpu.memory[0x0BFF] = 0x1F;
  assertEqual(6, cpu.ora(CPU6502.indirectX));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(0xFF, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0xFF;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFE);
  cpu.memory[0x0BFF] = 0xFF;
  assertEqual(5, cpu.ora(CPU6502.indirect_Y));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(0xFF, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.A = 0x0;
  cpu.Y = 0x01;
  cpu.memory[0x01] = 0x0F;
  cpu.write16Bits(0x0F, 0x0BFF);
  cpu.memory[0x0C00] = 0x00;
  assertEqual(6, cpu.ora(CPU6502.indirect_Y));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(true, cpu.flagIsSet(CPU6502.zero))
}

function testLDAop(cpu) {
  cpu.A = 0;
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  assertEqual(2, cpu.lda(CPU6502.immediate));
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  cpu.memory[0x10] = 0xAB;
  assertEqual(3, cpu.lda(CPU6502.zeroPage));
  assertEqual(0xAB, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x02;
  cpu.memory[1] = 0x10;
  cpu.memory[0x12] = 0xAB;
  assertEqual(4, cpu.lda(CPU6502.zeroPageX));
  assertEqual(0xAB, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x02;
  cpu.memory[1] = 0x10;
  cpu.memory[0x12] = 0xAB;
  assertEqual(4, cpu.lda(CPU6502.zeroPageX));
  assertEqual(0xAB, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.write16Bits(1, 0x1234);
  cpu.memory[0x1234] = 0x10;
  assertEqual(4, cpu.lda(CPU6502.absolute));
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x03;
  cpu.write16Bits(1, 0x1234);
  cpu.memory[0x1237] = 0x10;
  assertEqual(4, cpu.lda(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.write16Bits(1, 0x12FF);
  cpu.memory[0x1300] = 0xF0;
  assertEqual(5, cpu.lda(CPU6502.absoluteX));

  assertEqual(true, cpu.flagIsSet(CPU6502.negative))
  assertEqual(false, cpu.flagIsSet(CPU6502.zero))
  assertEqual(0xF0, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0x12FE);
  cpu.memory[0x12FF] = 0x0;
  assertEqual(4, cpu.lda(CPU6502.absoluteY));
  assertEqual(0x0, cpu.A);

  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0x12FF);
  cpu.memory[0x1300] = 0x10;
  assertEqual(5, cpu.lda(CPU6502.absoluteY));
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.memory[1] = 0x55;
  cpu.write16Bits(0x56, 0xABCD);
  cpu.memory[0xABCD] = 0x10;
  assertEqual(6, cpu.lda(CPU6502.indirectX));
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.memory[1] = 0x55;
  cpu.write16Bits(0x55, 0xABCD);
  cpu.memory[0xABCE] = 0x10;
  assertEqual(5, cpu.lda(CPU6502.indirect_Y));
  assertEqual(0x10, cpu.A);

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.memory[1] = 0x55;
  cpu.write16Bits(0x55, 0xABFF);
  cpu.memory[0xAC00] = 0x10;
  assertEqual(6, cpu.lda(CPU6502.indirect_Y));
  assertEqual(0x10, cpu.A);
}

function testLDXop(cpu) {
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  assertEqual(2, cpu.ldx(CPU6502.immediate));
  assertEqual(0x10, cpu.X);

  cpu.reset();
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  cpu.memory[0x10] = 0xAB;
  assertEqual(3, cpu.ldx(CPU6502.zeroPage));
  assertEqual(0xAB, cpu.X);

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.memory[1] = 0x10;
  cpu.memory[0x11] = 0xAB;
  assertEqual(4, cpu.ldx(CPU6502.zeroPageY));
  assertEqual(0xAB, cpu.X);

  cpu.reset();
  cpu.PC = 0;
  cpu.write16Bits(1, 0x1234);
  cpu.memory[0x1234] = 0x10;
  assertEqual(4, cpu.ldx(CPU6502.absolute));
  assertEqual(0x10, cpu.X);

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0x12FE);
  cpu.memory[0x12FF] = 0x0;
  assertEqual(4, cpu.ldx(CPU6502.absoluteY));
  assertEqual(0x0, cpu.X);

  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.Y = 0x01;
  cpu.write16Bits(1, 0x12FF);
  cpu.memory[0x1300] = 0x10;
  assertEqual(5, cpu.ldx(CPU6502.absoluteY));
  assertEqual(0x10, cpu.X);
}

function testLDYop(cpu) {
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  assertEqual(2, cpu.ldy(CPU6502.immediate));
  assertEqual(0x10, cpu.Y);

  cpu.reset();
  cpu.PC = 0;
  cpu.memory[1] = 0x10;
  cpu.memory[0x10] = 0xAB;
  assertEqual(3, cpu.ldy(CPU6502.zeroPage));
  assertEqual(0xAB, cpu.Y);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.memory[1] = 0x10;
  cpu.memory[0x11] = 0xAB;
  assertEqual(4, cpu.ldy(CPU6502.zeroPageX));
  assertEqual(0xAB, cpu.Y);

  cpu.reset();
  cpu.PC = 0;
  cpu.write16Bits(1, 0x1234);
  cpu.memory[0x1234] = 0x10;
  assertEqual(4, cpu.ldy(CPU6502.absolute));
  assertEqual(0x10, cpu.Y);

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.write16Bits(1, 0x12FE);
  cpu.memory[0x12FF] = 0x0;
  assertEqual(4, cpu.ldy(CPU6502.absoluteX));
  assertEqual(0x0, cpu.Y);

  assertEqual(true, cpu.flagIsSet(CPU6502.zero))

  cpu.reset();
  cpu.PC = 0;
  cpu.X = 0x01;
  cpu.write16Bits(1, 0x12FF);
  cpu.memory[0x1300] = 0x10;
  assertEqual(5, cpu.ldy(CPU6502.absoluteX));
  assertEqual(0x10, cpu.Y);
}

function testLSRop(cpu) {
  cpu.A = 0b00000001;
  assertEqual(2, cpu.lsr(CPU6502.accumulator));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(0, cpu.A);

  cpu.reset();
  cpu.A = 0b00000011;
  assertEqual(2, cpu.lsr(CPU6502.accumulator));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(1, cpu.A);

  cpu.reset();
  cpu.memory[1] = 0xF1;
  cpu.memory[0xF1] = 0b00000011;
  assertEqual(5, cpu.lsr(CPU6502.zeroPage));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(1, cpu.memory[0xF1]);

  cpu.reset();
  cpu.X = 1;
  cpu.memory[1] = 0xF0;
  cpu.memory[0xF1] = 0b11000000;
  assertEqual(6, cpu.lsr(CPU6502.zeroPageX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(96, cpu.memory[0xF1]);

  cpu.reset();
  cpu.write16Bits(1, 0xF0);
  cpu.memory[0xF0] = 0b11000000;
  assertEqual(6, cpu.lsr(CPU6502.absolute));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(96, cpu.memory[0xF0]);

  cpu.reset();
  cpu.X = 1;
  cpu.write16Bits(1, 0xF0);
  cpu.memory[0xF1] = 0b11000001;
  assertEqual(7, cpu.lsr(CPU6502.absoluteX));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(96, cpu.memory[0xF1]);
}

function testADCop(cpu) {
  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.memory[0x01] = 0b00000010;
  assertEqual(2, cpu.adc(CPU6502.immediate));
  assertEqual(4, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b11111110;
  cpu.memory[0x01] = 0b00000001;
  assertEqual(2, cpu.adc(CPU6502.immediate));
  assertEqual(255, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b11111111;
  cpu.memory[0x01] = 0b00000001;
  assertEqual(2, cpu.adc(CPU6502.immediate));
  assertEqual(0, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b10000000;
  cpu.memory[0x01] = 0b10000000;
  assertEqual(2, cpu.adc(CPU6502.immediate));
  assertEqual(0, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.X = 1;
  cpu.write16Bits(1, 0x2020);
  cpu.memory[0x2021] = 0b00000010;
  assertEqual(4, cpu.adc(CPU6502.absoluteX));
  assertEqual(4, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.X = 1;
  cpu.write16Bits(1, 0x20FF);
  cpu.memory[0x2100] = 0b00000010;
  assertEqual(5, cpu.adc(CPU6502.absoluteX));
  assertEqual(4, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b01000000;
  cpu.X = 1;
  cpu.write16Bits(1, 0x20FF);
  cpu.memory[0x2100] = 0b01000000;
  assertEqual(5, cpu.adc(CPU6502.absoluteX));
  assertEqual(128, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0x02;
  cpu.memory[1] = 0x02;
  cpu.setFlag(CPU6502.carry);
  cpu.adc(CPU6502.immediate);
  assertEqual(5, cpu.A);
  cpu.reset()
}

function testSBCop(cpu) {
  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.memory[0x01] = 0b00000010;
  assertEqual(2, cpu.sbc(CPU6502.immediate));
  assertEqual(0, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.memory[0x01] = 0b00000010;
  assertEqual(2, cpu.sbc(CPU6502.immediate));
  assertEqual(0, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b00000101; // 5
  cpu.memory[0x01] = 0b00001010; // 10
  assertEqual(2, cpu.sbc(CPU6502.immediate));
  assertEqual(251, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(true, cpu.flagIsSet(CPU6502.negative));
  assertEqual(false, cpu.flagIsSet(CPU6502.carry));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b00000010;
  cpu.X = 1;
  cpu.write16Bits(1, 0x20FF);
  cpu.memory[0x2100] = 0b00000010;
  assertEqual(5, cpu.sbc(CPU6502.absoluteX));
  assertEqual(0, cpu.A);
  assertEqual(false, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(true, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()

  cpu.PC = 0;
  cpu.A = 0b11000000;
  cpu.X = 1;
  cpu.write16Bits(1, 0x20FF);
  cpu.memory[0x2100] = 0b10100000;
  assertEqual(5, cpu.sbc(CPU6502.absoluteX));
  assertEqual(32, cpu.A);
  assertEqual(true, cpu.flagIsSet(CPU6502.overflow));
  assertEqual(false, cpu.flagIsSet(CPU6502.negative));
  assertEqual(true, cpu.flagIsSet(CPU6502.carry));
  assertEqual(false, cpu.flagIsSet(CPU6502.zero));
  cpu.reset()
}

var cpu = new CPU6502();
cpu.connectMemory(new Uint8Array(new ArrayBuffer(65536)));
testSBCop(cpu);
cpu.reset();
testADCop(cpu);
cpu.reset();
testLSRop(cpu);
cpu.reset();
testLDYop(cpu);
cpu.reset();
testLDXop(cpu);
cpu.reset();
testLDAop(cpu);
cpu.reset();
testRORop(cpu);
cpu.reset();
testROLop(cpu);
cpu.reset();
testORAop(cpu);
cpu.reset();
testEORop(cpu);
cpu.reset();
testJSRop(cpu);
cpu.reset();
testJMPop(cpu);
cpu.reset();
testINCop(cpu);
cpu.reset();
testDECop(cpu);
cpu.reset();
testCPYop(cpu);
cpu.reset();
testCPXop(cpu);
cpu.reset();
testCMPop(cpu);
cpu.reset();
testASLop(cpu);
cpu.reset();
testANDop(cpu);
cpu.reset();
testSTYop(cpu);
cpu.reset();
testSTXop(cpu);
cpu.reset();
testSTAop(cpu);
cpu.reset();
testIndirectYAddressing(cpu);
cpu.reset();
testIndirectXAddressing(cpu);
cpu.reset();
testAbsoluteYAddressing(cpu);
cpu.reset();
testAbsoluteXAddressing(cpu);
cpu.reset();
testAbsoluteAddressing(cpu);
cpu.reset();
testZeroPageYAddressing(cpu);
cpu.reset();
testZeroPageXAddressing(cpu);
cpu.reset();
testZeroPageAddressing(cpu);
cpu.reset();
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
cpu.reset();
testRTSop(cpu)
cpu.reset();
testSECop(cpu);
cpu.reset();
testSEDop(cpu);
cpu.reset();
testSEIop(cpu);
cpu.reset();
testTAXop(cpu);
cpu.reset();
testTAYop(cpu);
cpu.reset();
testTSXop(cpu);
cpu.reset();
testTXAop(cpu);
cpu.reset();
testTXAop(cpu);
cpu.reset();
testTXSop(cpu);
cpu.reset();
testTYAop(cpu);
cpu.reset();
testBCCop(cpu);
cpu.reset();
testBCSop(cpu);
cpu.reset();
testBEQop(cpu);
cpu.reset();
testBMIop(cpu);
cpu.reset();
testBNEop(cpu);
cpu.reset();
testBPLop(cpu);
cpu.reset();
testBVCop(cpu);
cpu.reset();
testBVSop(cpu);
cpu.reset();
testBITop(cpu);
cpu.reset();

// If we get here none of the tests failed...
(function(){
  var graf = document.createElement('p');
  graf.classList += " success";
  graf.innerText = "All CPU Operation Tests passed";
  document.body.appendChild(graf);
})()
