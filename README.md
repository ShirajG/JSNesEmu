# JavaScript NES emulator
This project aims to build an NES emulator in JavaScript.

## Part 1: The System Architecture
[The NES class](js/nes.js) represents the full NES system and includes the various components like the CPU, Memory bank, and PPU(picture processing unit) within it. The goal of this class is to tie together the behavior of all these different components via the `tick` method which represents a clock tick. The PPU runs faster than the CPU, so for every 3 ticks we advance the CPU, but we advance the PPU on every tick.

Memory is represented via a [Uint8Array typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) to allow us to work directly with 8-bit binary values.

## Part 2: The CPU
[The 6502 class](js/6502.js) represents the CPU for the NES. Its responsibility is to fetch 8-bit operation codes(opCodes) from memory, and execute the corresponding operations. Each operation takes up a fixed amount of cycles, which is the value being returned from each operation. We need this cycle count to be able to keep in sync with the system clock, so the CPU has its own `tick` method that keeps track of how many system cycles are left before it should execute a new fetch/execute. OpCode handling is taken care of in the 6502's `execute` method, with each operation having a corresponding method in the `6502` class.

#### CPU Registers
The CPU has 6 'registers', which can be thought of as internal state that the CPU manages. They are as follows:
- Program Counter: This register tracks the memory address of the next instruction to be executed, it's 16 bits wide.
- Stack Pointer: This register points to the head of the stack memory area.
- Status: This register stores 6 one bit flags about various operations, e.g: setting a 'Zero' flag if the result of the last processed operation was 0. A complete list can be seen [here](https://wiki.nesdev.com/w/index.php/Status_flags)
- A: This is the accumulator, it's used as a place to store results of calculations temporarily before moving them back into main memory or discarding them.
- X, Y: These registers are used as loop counters and as memory offsets in certain addressing modes.

#### Operations and Addressing Modes
The CPU supports [ 56 different official operations ]( http://obelisk.me.uk/6502/reference.html ), each of which can be called with different 'addressing modes'. Depending on the addressing mode, an operation will load its arguments from different places in memory, and cost a different amount of CPU cyles. A full list can be seen [here]( http://obelisk.me.uk/6502/addressing.html#IMM ). The `getAddress` method handles the logic of getting the right memory address passed to an Operation based on the operations addressing mode.

### Testing
There are 3 types of testing present for the CPU right now.
- [Unit tests]( ./js/test_ops.js ) for each operation are present here. They test that each operation gives the correct result in each addressing mode that it can be called.
- [Integration tests]( ./js/test_nes.js ) in the form of small programs written in 8-bit opcodes which test that a series of operations give the correct final result.
- [A full 3rd party testing suite](nestest.nes) that can be loaded into memory and run. This file is in binary, but a passing log is located [here]( ./js/testLog.js ), and logging is implemented in the 6502's `logOperation` method to match the format of the passing log. Any errors in the 6502 implementation can be found by comparing the output from the known good log against the output from the `logOperation` method.

## Part 3: Picture Processing Unit
TBD

## Part 4: Audio Processing Unit
TBD

## Resources
- [NES Dev Wiki](https://wiki.nesdev.com/w/index.php/Programming_guide) An overview of what it takes to emulate the NES, full of helpful links to resources.
- [http://obelisk.me.uk/6502/reference.html](http://obelisk.me.uk/6502/reference.html) Contains detailed info on all 6502 operations.
- [6502 Programming Manual](http://users.telenet.be/kim1-6502/6502/proman.html) Official manual for the 6502. Contains lots of helpful explanations of how the CPU works, useful when you need more info about how to implement an operation.
- [NES Dev Emulator Development Forum](http://forums.nesdev.com/viewforum.php?f=3) Lots of helpful posts here by other emulator developers. Useful to search through if you run up against a strange bug.
