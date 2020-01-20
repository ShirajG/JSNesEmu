var cpu = new CPU6502();
var ppu = new PPU();
var nes = new NES(cpu, ppu);

nes.powerOn();




