console.log("hey girly");

let xAxis;
let yAxis;

$(function () {
  $(".draggable").draggable({
    start: function () {},
    drag: function () {
      xAxis = document.getElementById("rock").style.left;
      yAxis = document.getElementById("rock").style.top;
      console.log({ xAxis });
      console.log({ yAxis });
    },
    stop: function () {},
  });
});
