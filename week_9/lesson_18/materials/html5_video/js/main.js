$(function() {
  // Controlling a video/audio element with Javascript

    // NOTICE: using a jQuery selector will return an array expose the jQuery
    // functions, and not the native DOM ones (no play, pause etc.)

    $('#video_player'); // jQuery functions only
    $('#video_player')[0]; // Select first element in array, DOM functions available

    // Activity 1
    // Add to the video to the page
    // Make the video play when the Play button element is pressed
    // Change the button's text to Pause when the video starts to play,
    // and have it pause the video if clicked. Hint: toggle!


    // Activity 2
    // Change the button to slideDown the video_container element from a hidden
    // state by default and play it when completed. Hint: you need to use
    // two callbacks!


    // Activity 3
    // Create volume up/down buttons using the video API



});
