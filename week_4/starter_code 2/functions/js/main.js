function helloWorld () {
console.log ("Hello Mariana!");
}

helloWorld ();
// function with arguments
function addAndPrint (num1, num2) {
  var sum = num1 +num2;
  console.log (sum);
}
addAndPrint (1, 5);

// javascript concatination
function multiplyAndPrint (num3, num4) {
  var multiplication = num3 * num4;
  console.log ("The multiplication is:" + multiplication);
}
multiplyAndPrint (3, 4);

//anonymous function
//demonstrating returning a value
var division = function (num5, num6) {
  return num5 / num6
}
console.log (division(10,5));

function nameAndAge (name, age) {
  //this works, but it is not good practice, better to return the value and call console.log outside
  //console.log ("Your name is " + name + ", and you are " + age);
  return name + " is" + " " + age;
}
//nameAndAge ("Mariana", 24);
console.log (nameAndAge ("Mariana", 24));