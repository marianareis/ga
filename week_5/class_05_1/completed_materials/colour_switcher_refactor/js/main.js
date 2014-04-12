$(document).ready(function() {

  var body = $("#background");

  $("#grey").on("click", function() {
    body.css("background", "grey");
    body.css("color", "white");
  });

  $("#blue").on("click", function() {
    body.css("background", "blue");
    body.css("color", "white");
  });

  $("#yellow").on("click", function() {
    body.css("background", "yellow");
    body.css("color", "black");
  });

});
