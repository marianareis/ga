$(function() {

  $(".nav-item").on ("click", function (event){
    event.preventDefault();
    $(".nav-item, .nav-content").removeClass("current");
    $(this).addClass("current");
  });

  $("#politics").on ("click", function(event){
    $("#politics-content").addClass("current");
  });

  $("#international").on ("click", function(event){
    $("#international-content").addClass("current");
  });

  $("#business").on ("click", function(event){
    $("#business-content").addClass("current");
  });
 });