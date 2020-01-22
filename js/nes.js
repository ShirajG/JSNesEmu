class NES {
  constructor(cpu, ppu, cpuMem) {
    this.cycleCount = 0;
    this.running = false;
    // 2KB Internal RAM for CPU
    // Can be passed in for testing
    if (cpuMem) {
      this.cpuMem = cpuMem;
    } else {
      this.cpuMem = new Uint8Array(new ArrayBuffer(2048));
    }
    this.cpu = cpu;
    this.ppu = ppu;
    this.cpu.connectMemory(this.cpuMem);
    this.cpu.bus = this;
    this.cpu.reset();
  }

  kill () {
    this.running = false;
    console.log("Stopping emulation");
  }

  loadTestMemory (mem) {
    for(var key in mem) {
      this.cpuMem[key] = mem[key];
    }
  }

  reset () {
    this.cpu.reset();
    this.cycleCount = 0;
    this.running = false;
    this.cpuMem = new Uint8Array(new ArrayBuffer(2048));
    this.cpu.connectMemory(this.cpuMem);
  }

  powerOn () {
    this.running = true;
    while (this.running) {
      this.tick();
    }
  }

  tick () {
    this.cycleCount++;
    this.ppu.tick();
    if (this.cycleCount % 3 == 0 ) {
      this.cpu.tick();
    }
  }
}
