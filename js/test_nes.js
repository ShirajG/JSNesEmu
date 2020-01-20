var cpu = new CPU6502();
var ppu = new PPU();
var nes = new NES(cpu, ppu);

var ldaTest = {
  0x00: 0xA9, // LDA imm
  0x01: 0x0A, // 10
  0x02: 0xA2, // LDX imm
  0x03: 0x05, // 5
  0x04: 0xE8, // INX
  0x05: 0xC8, // INY
  0x06: 0xC9, // CMP imm
  0x07: 0x0A, // 10
}

nes.loadTestMemory(ldaTest);
nes.powerOn();
assertEqual(0x0A, nes.cpu.A);
assertEqual(0x06, nes.cpu.X);
assertEqual(0x01, nes.cpu.Y);
assertEqual(1, nes.cpu.getFlag(CPU6502.zero));

// If we get here none of the tests failed...
(function(){
  var graf = document.createElement('p');
  graf.classList += " success";
  graf.innerText = "All Test Programs passed";
  document.body.appendChild(graf);
})()



