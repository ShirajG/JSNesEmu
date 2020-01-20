class NES {
  constructor(cpu) {
    // 2KB Internal RAM for CPU
    this.cpuMem = new Uint8Array(new ArrayBuffer(2048));
    this.cpu = cpu;
    this.cpu.connectMemory(this.cpuMem);
  }
}
