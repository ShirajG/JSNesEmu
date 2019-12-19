# Building an NES emulator

## Reference Documents
[6502 OpCodes that need to be emulated](http://www.obelisk.me.uk/6502/reference.html)

## Notes
First steps are to build a simple model to represent the CPU. I'll represent the 6 registers as instance variables in the CPU class. These will be initialized to their proper power on values. A reset method will allow these values to be reinstated.
