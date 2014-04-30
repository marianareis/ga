$(document).ready(function(){
  // Scrolld
  $("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});

  // FitVids
  $("body").fitVids();

  // Flexslider
   $('.flexslider').flexslider({
      animation: "slide"
    });
});