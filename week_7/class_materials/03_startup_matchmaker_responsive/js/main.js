$(document).ready(function() {
  console.log("hey!");
  // listen to click of #trigger
  $("#trigger").on("click", function() {
    $("nav ul").toggleClass("slideDown");
  });
});