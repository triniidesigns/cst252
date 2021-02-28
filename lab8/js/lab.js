/**
 Author:    Juan Trinidad
 Created:   02.28.2021
 License:   Public Domain
 **/

//Declared variable containing array's then priting results
var numbs = [1, 2, 3, 4, 5];
console.log("My Array: ", numbs);

//Declared function that will double parameter
function double(x) {
  var results = x * 2;
  return results;
}

//Declared variable to store double parameter then priting results
var answer = numbs.map(double);
console.log("Array Doubled: ", answer);

//Declared variable containing anon function to multiply a parameter with itself. Then priting results.
var answer2 = numbs.map(function(x) {
    var results = x * x;
    return results;
})
console.log("Self-Multiplied Array: ", answer2);

// Print Out
document.write("Original Array: ", numbs, "<br>");
document.write("Array Doubled Results: ", answer, "<br>");
document.write("Array Self-Multiplied Results: ", answer2, "<br>");
