let xAxis;
let yAxis;

// get window px dimensions
// get xy position of rock in number relative to placement of window
// create map of frequency to position

$(function () {
  $(".draggable").draggable({
    start: function () {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const amplifier = audioContext.createGain();
      oscillator.frequency = 0;
      amplifier.gain.value = 0.8;
      oscillator.frequency.cancelScheduledValues(0);
      oscillator.frequency.setValueAtTime(220, 0); // initial frequency value of 220;
      oscillator.frequency.linearRampToValueAtTime(440, 3); // max/target frequency value fo 440 with attack time of 3
      oscillator.frequency.linearRampToValueAtTime(220, 5); // end frequency value of 220 with decay length of 2 (5-3)
      oscillator.connect(amplifier);
      amplifier.connect(audioContext.destination);
      oscillator.start(0);
      oscillator.stop(10); // total note length time
      amplifier.start;
      audioContext.start;
    },
    drag: function () {
      xAxis = document.getElementById("rock").style.left;
      yAxis = document.getElementById("rock").style.top;
      console.log({ xAxis });
      console.log({ yAxis });
    },
    stop: function () {},
  });
});
