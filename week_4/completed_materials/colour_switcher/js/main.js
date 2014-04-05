window.onload = function() {

  var body = document.getElementById('background');
  var greyButton = document.getElementById('grey');
  var blueButton = document.getElementById('blue');
  var yellowButton = document.getElementById('yellow');

  greyButton.onclick = function() {
    body.style.backgroundColor = 'grey';
    body.style.color = 'white';
  }

  blueButton.onclick = function() {
    body.style.backgroundColor = 'blue';
    body.style.color = 'white';
  }

  yellowButton.onclick = function() {
    body.style.backgroundColor = 'yellow';
    body.style.color = 'black';
  }

}
