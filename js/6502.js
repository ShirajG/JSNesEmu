var memory = new ArrayBuffer(65536);
var cpu = (function(){
  this.A = 0x00; // Accumulator Register
  this.X = 0x00; // X Register
  this.Y = 0x00; // Y Register
  this.PC = null; // Program Counter
  this.S = null; // Stack Pointer, starts at
  this.P = 0x34; // Processor State

  return {
    printRegisters: () => {
      console.log("A = ", this.A);
      console.log("X = ", this.X);
      console.log("Y = ", this.Y);
      console.log("PC = ", this.PC);
      console.log("S = ", this.S);
      console.log("P = ", this.P);
    }
  }
)()

var system = {
  cpu: cpu,
  memory: memory,
  boot: function () {
    this.getInstruction();
    this.cpu.executeInstruction();
  },
  reboot: function () {
    this.boot();
  }
}

system.cpu.printRegisters();
