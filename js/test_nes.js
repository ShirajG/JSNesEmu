var cpu = new CPU6502();
var ppu = new PPU();
var nes = new NES(cpu, ppu);

var ldaTest = [
  0xA9,
  0x0A
]

nes.loadTestMemory(ldaTest);
nes.powerOn();
assertEqual(0x0A, nes.cpu.A);





