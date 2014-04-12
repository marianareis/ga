// create an array with the images
// create an on click action for the buttons, to skip to different elements inside the array

// inside #image-to-vote-on.html,set the value to each one of the elements in the array to the source of the images
// function  : when button-skip is clicked, skip to next element in the array (i++)
// function2 : when button-back is clicked, go back to previous element in the array (i--)

$(function (){
  // $("img").attr("src", "images/food3.jpg");
  var images = ["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];
  var i = 0;

  function previousImage(){
  console.log("you clicked the back button!");
  i--;
  $("img#image-to-vote-on").attr('src', images[i]);
  }

   function nextImage(){
    console.log("you clicked the skip button!");
    i++;
    $("img#image-to-vote-on").attr('src', images[i]);
  }

  $("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
  $("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
 // {
  //   $("img#image-to-vote-on").attr('src', '');
  // });
// {
  //   $("#image-to-vote-on") = images[i--];
  // });
});

