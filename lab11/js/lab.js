/**
 Author:    Juan Trinidad
 Created:   03.08.2021
 License:   Public Domain
 **/

//function with conditional statement to decide the output
function sortingHat(str) {
  var len = str.length;
  console.log("Length = ", len);
  var mod = len % 4;
  console.log("Mod = ", mod);

//conditional statement
  if (mod == 0) {
      return("Gryffindor");
  } else if (mod == 1) {
      return("Revenclaw");
  } else if (mod == 2) {
      return("Slytherin");
  } else {
      return("Hufflepuff");
  }
}

//Create event listener for button and output to page
var button = document.getElementById("button");
button.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
