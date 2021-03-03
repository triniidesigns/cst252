/**
 Author:    Juan Trinidad
 Created:   03.02.2021
 License:   Public Domain
 **/

//find and store output through a variable
var outputEl = document.getElementById("jsoutput");

// Var Created with new element & Change HTML attribute
var new1El = document.createElement("p");
new1El.innerHTML = "Something New";

// Second Var Created with new element & Change HTML attribute
var new2El = document.createElement("p");
new2El.innerHTML = "Something different";

//Append the new elements to show on webpage
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "Red";
new2El.style.color = "Blue";
