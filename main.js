console.log("hey girly");

$(function () {
  $(".draggable").draggable({
    start: function () {},
    drag: function () {
      console.log(document.getElementById("rock"));
    },
    stop: function () {},
  });
});
