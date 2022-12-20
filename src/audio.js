class AudioEngine {
  constructor() {
    this.audioContext = new AudioContext();
    this.oscillator = this.audioContext.createOscillator();
    this.amplifier = this.audioContext.createGain();
  }
}

const runSound = () => {
  const audioEngine = new AudioEngine();
  audioEngine.oscillator.frequency.cancelScheduledValues(0);
  audioEngine.oscillator.frequency.setValueAtTime(220, 0); // initial frequency value of 220;
  audioEngine.oscillator.frequency.linearRampToValueAtTime(440, 3); // max/target frequency value fo 440 with attack time of 3
  audioEngine.oscillator.frequency.linearRampToValueAtTime(220, 5); // end frequency value of 220 with decay length of 2 (5-3)
  audioEngine.oscillator.connect(audioEngine.amplifier);
  audioEngine.amplifier.connect(audioEngine.audioContext.destination);
  audioEngine.oscillator.start(0);
  audioEngine.oscillator.stop(10); // total note length time
  audioEngine.amplifier.start;
  audioEngine.audioContext.start;
};

export { runSound };
