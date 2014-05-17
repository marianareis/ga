function updateName (name) {
  $("h2").text("Hey, I remember you! Your name is" + " " + name);
}

$(function() {

  if (typeof (localStorage.coolName) !== "undefined") {
    updateName(localStorage.coolName);
}

  var form= $("#name_capture");

    form.on("submit", function (event){
      event.preventDefault();
      var name = $("#your_name").val();
      localStorage.coolName= name;
      $("h2").text("Hey your name is" + " " + name);
    });
});