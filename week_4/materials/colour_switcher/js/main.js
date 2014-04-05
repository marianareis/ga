window.onload = function() {

  var body = document.getElementById('background');
  var greyButton = document.getElementById('grey');
  var blueButton = document.getElementById('blue');
  var yellowButton = document.getElementById('yellow');

  greyButton.onclick = function() {
    colorSwitch ("grey", "white");
  }

  blueButton.onclick = function() {
    colorSwitch ("blue", "white");
    //body.style.backgroundColor = 'blue';
    //body.style.color = 'white';
  }

  yellowButton.onclick = function() {
    colorSwitch ("yellow", "black");
    //body.style.backgroundColor = 'yellow';
    //body.style.color = 'black';
  }
  function colorSwitch (bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
  }
}
