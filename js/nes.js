class NES {
  constructor(cpu, ppu) {
    this.cycleCount = 0;
    this.running = false;
    // 2KB Internal RAM for CPU
    this.cpuMem = new Uint8Array(new ArrayBuffer(2048));
    this.cpu = cpu;
    this.ppu = ppu;
    this.cpu.connectMemory(this.cpuMem);
  }

  powerOn () {
    this.running = true;
    while (this.running) {
      this.tick();
    }
  }

  tick() {
    // Random kill for testing
    if (Math.random() < 0.01) {
      this.running = false;
    }

    this.cycleCount++;
    this.ppu.tick();
    if (this.cycleCount % 3 == 0 ) {
      this.cpu.tick();
    }
  }
}
