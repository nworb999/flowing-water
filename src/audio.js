const noteTable = [
  65.41, // C2
  73.42, // D2
  87.31, // F2
  98, // G2
  110, // A2
  130.81, // C3
  146.83, // D3
];

const audioContext = new AudioContext();

let oscillator;
let amplifier;

const mapNote = (xAxis) => {
  // returns string number based on xAxis
  const stringNumber =
    xAxis > 1200 ? 6 : Math.round(Math.min(xAxis / 170 || 0, 6), 1);
  return noteTable[stringNumber];
};

const setFrequency = (xAxis) => {
  const noteFreq = mapNote(xAxis);
  oscillator.frequency.setValueAtTime(noteFreq, 0); // initial frequency value of 220;
  oscillator.frequency.linearRampToValueAtTime(noteFreq * 1.2, 3); // max/target frequency value fo 440 with attack time of 3
  oscillator.frequency.linearRampToValueAtTime(noteFreq * 0.8, 5); // end frequency value of 220 with decay length of 2 (5-3)
};

const startAudio = (xAxis) => {
  oscillator = audioContext.createOscillator();
  amplifier = audioContext.createGain();

  oscillator.frequency.cancelScheduledValues(0);
  setFrequency(xAxis);

  oscillator.connect(amplifier);
  amplifier.connect(audioContext.destination);

  oscillator.start(audioContext.currentTime);
  amplifier.start;
  audioContext.start;
};

const stopAudio = () => {
  oscillator.stop(audioContext.currentTime + 100);
  amplifier.disconnect(audioContext.destination);
  oscillator.disconnect(amplifier);
};

export { startAudio, stopAudio, setFrequency };
