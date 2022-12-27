# flowing water (2022 - present)

<img align="right" height="500" src="https://user-images.githubusercontent.com/20407156/209596797-1c8f194a-225d-46f7-8711-804a831f18b8.jpg">

A musical interface inspired by the famous guqin tune **流水**, or "Flowing Water". In modern renditions of the song, there is a
section comprised entirely of **滾拂**, or
[glissando](https://www.youtube.com/watch?v=B8F0G4QEQYg&t=224s), reminiscent of water flowing through a rocky stream.

The guqin is a seven-stringed zither with thirteen 徽, or stops, which are positioned according to harmonics.  Because the guqin is fretless, it can cerate essentially an infinite amount of different notes along each string.

The synth is essentially an arpeggiator that emulates the texture of
**滾拂**. The chord is controlled by the X, Y position
of a rock in a stream, which will modify the pitch of a single note in the chord. Modeled on the standard tuning of the guqin, the app quantizes the browser window into seven different quadrants associated with the open string note of each guqin string on the X-axis, along with a continuous range of frequencies along the Y-axis of each quadrant to represent the sliding of the finger along the string. Using the Web Audio API, the arpeggiator will play and update with every drag of the rock across the screen.


### relevant links

- [Guan Pinghu rendition of 流水 (featured on The Voyager Golden Record)](https://www.youtube.com/watch?v=YHVt-xAaq-4)
- [**滾拂** technique demonstration](https://www.youtube.com/watch?v=84rCZPIMjxM&ab_channel=PeiyouChang)


<figure><img src="https://blog.nyl.io/content/images/2020/12/hui8.png"><figcaption><a href="https://blog.nyl.io/guqin-part-1-harmonics-and-hui/">diagram source</a></figcaption></figure>

## v.0.0

The current version, where the rock controls the pitch based on its position on the screen's X-axis. The screen is quantized into seven sections applying the frequency of the corresponding open string note of the guqin.

Fixes have to be made to allow for continuous dragging without the audio engine crashing. I'm also considering using recordings of my own guqin instead of the Web Audio Oscillator.

## v.0.99

Will involve Y-axis interaction, with a
continuous range of frequencies along each string. If I choose to use a guqin sample as the sound source, I will have to figure out how to pitch it continiuously with the slide instead of jumping to certain stops along the string that I recorded.

## v1.0

Will introduce the arpeggiator and a basic background.
