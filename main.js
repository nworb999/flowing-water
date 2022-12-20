import { runSound } from "./src/audio.js";
// get window px dimensions
// get xy position of rock in number relative to placement of window
// create map of frequency to position
let xAxis;
let yAxis;

$(function () {
  $(".draggable").draggable({
    start: function () {
      runSound();
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
