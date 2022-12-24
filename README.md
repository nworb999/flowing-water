# flowing water (2022 - present)

A musical interface inspired by the famous guqin tune **流水**, or "Flowing Water". In modern renditions of the song, there is a
section comprised entirely of **滾拂**, or
[glissando](https://www.youtube.com/watch?v=B8F0G4QEQYg&t=224s), reminiscent of water flowing through a rocky stream.

The synth is essentially an arpeggiator that emulates the texture of
**滾拂**. The chord is controlled by the X, Y position
of a rock in a stream, which will modify the pitch of a single note in the chord. Modeled on the standard tuning of the guqin, the app quantizes the browser window into seven different quadrants associated with the open string note of each guqin string on the X-axis, along with a continuous range of frequencies along the Y-axis of each quadrant to represent the sliding of the finger along the string. Using the Web Audio API, the arpeggiator will play and update with every drag of the rock across the screen.

## v.0.0

The current version, where the rock controls the pitch based on its position on the screen's X-axis. The screen is quantized into seven sections applying the frequency of the corresponding open string note of the guqin.

## v.0.99

Will involve Y-axis interaction, with a
continuous range of frequencies along each string.

## v1.0

Will introduce the arpeggiator and a basic background.

### relevant links

- [Guan Pinghu rendition of 流水, featured on The Voyager Golden Record](https://www.youtube.com/watch?v=YHVt-xAaq-4)
- [**滾拂** technique demonstration](https://www.youtube.com/watch?v=84rCZPIMjxM&ab_channel=PeiyouChang)
