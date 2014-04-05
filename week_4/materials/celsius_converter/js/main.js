window.onload = function() {
  var result = document.getElementById ("result"),
      celsius = document.getElementById ("celsius"),
      button = document.getElementById ("submit");

button.onclick = function () {
  var sum = celsius.value * 1.8 + 32;
  result.innerHTML = sum.toFixed (2);
}
}
