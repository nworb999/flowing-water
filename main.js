import { startAudio, stopAudio, setFrequency } from "./src/audio.js";

// get window px dimensions
// get xy position of rock in number relative to placement of window
// create map of frequency to position

let xAxis = 0;
let yAxis = 0;

$(function () {
  $(".draggable").draggable({
    start: function () {
      xAxis = document.getElementById("rock").style.left;
      yAxis = document.getElementById("rock").style.top;
      startAudio(parseInt(xAxis.replace("px", "")));
    },
    drag: function () {
      setFrequency(parseInt(xAxis.replace("px", "")));
    },
    stop: function () {
      stopAudio();
    },
  });
});
