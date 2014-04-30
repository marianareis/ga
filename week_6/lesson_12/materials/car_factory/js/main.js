$(function() {

  $("#car-form").on("submit", function(event) {
    event.preventDefault();

    var make = $("#make").val(),
        model = $("#model").val(),
        year = $("#year").val();

    var car = new Car(make, model, year);

    addCarToList(car);

    });
  });
var addCarToList = function(car) {
  $("#stock").append ("<li>" + car.make + " " + car.model + " " + car.year + "</li>");
};

var Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.beephorn = function () {
    console.log(this.model + " " + "beeped it's horn!");
    return true;
  };
};
