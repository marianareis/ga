$(function() {

  // Capture form submission event
  $("form").on("submit", function(event) {

    // Stop form from submitting straight away
    event.preventDefault();

    // Boolean - should the form submit?
    var formSubmits = true;

    // Check status of formSubmits variables
    if (formSubmits) {

      // Disables form submit event from bubbling and submits form
      $(this).off().submit();

    }

  });

});
