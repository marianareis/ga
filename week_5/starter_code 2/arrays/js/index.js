$(function() {
  var myArr = ["Hello", , 54.3, true];

  console.log (myArr);
  console.log (myArr[0]);
  console.log (myArr[1]);

  myArr [1] = "stuff";
    console.log (myArr[1]);

  var fruits = ["Apples", "Oranges", "Pears"];
  myArr = fruits;
  console.log (myArr[0]);

  // return number of items in array - .length
  console.log(myArr.length);

  // adds content to the end of the array - .push
  myArr.push("Strawberries");
  console.log(myArr);

// deletes the last element of an array - .pop
  myArr.pop();
  console.log(myArr);

  // adds an element to a specific position in the array - .splice
  // 1st number is position, 2nd number is number of elements being removed, 3rd is the element)
  myArr.splice(2, 0, "Mango");
  console.log(myArr);

   // Attributes
   var className = $("h1").attr("class");
   console.log(className);

   className = $("h1").attr("class", "new-heading");

   // forEach loops
   var names = ["Daniel", "James", "CJ"];
   names.forEach(function(element, index){
    console.log(element, index);
   })

});







