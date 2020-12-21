# jit.underworld

A small package of abstractions that allow for non-realtime rendering of jitter visuals with sound

# About

Utility abstraction that allows for non-realtime rendering of jitter visuals. The rendering process has three steps. 

- `realtime` : First you set the mode to (realtime), allowing normal jitter processes and rendering, use this to patch like usual and create your generative processes and controller mappings. 

- `capture` : Then start (capture) to gather all controller, signal and data-streams on a per-frame basis (with framecount) into a dictionary. Switch to (realtime) to stop the capturing, or send a message (stop). 

- `render` : The final stage is the (render). Starting the render will reset the framecount to 0, start rendering the visuals on the set resolution (dim), and record to [jit.record] with the settings (fps), (codec) and (engine). For every frame it will gather the capture data and apply to the visuals.

# Objects

## jit.underworld

The main object that works together with the `jit.world` object to create a non-realtime rendering option.
### arguments:
- jit.world context name
- jit.underworld context name (use this for all your jitter objects in the patch)

### attributes

- `@fps` - the frames per second for data/signal capture and offline rendering
- `@dim` - the resolution x/y
- `@codec` - recording code (h264, prores, huffyuv, gif, jpeg)
- `@engine` - recording engine (viddll, hap, avf, qt)

### messages

- `realtime` - use jitter in realtime, as usual
- `capture` - start capturing the data/signal streams to dictionary per frame
- `render` - offline render the captured data/signal/visual to disk
- `goto` - view a specific frame
- `rewind` - rewind framecount to 0 (stop/realtime also rewind)

# Install


Download zip
```
1. download zip
2. unzip and place in Max Searchpath (eg. MacOS ~/Documents/Max 8/Library)
3. restart Max8
```
Git clone
```
1. $ cd ~/Documents/Max\ 8/Library
2. $ git clone https://github.com/tmhglnd/jit.underworld.git
3. restart Max8
```
```
4. Create a new object with "n" and type jit.underworld. Alt + Right-click to open the helpfile.
5. Read the helpfile for a detailed description.
```

# License

The MIT License