/**
 Author:    Juan Trinidad
 Created:   04.04.2021
 License:   Public Domain
 **/

//constructor
// function Vehicle(make, model, year, color, extras) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.extras = extras;
//   this.info = function() {
//     return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
//   }
// }

//New CLass Method
class Vehicle {
  constructor(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
}

info() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras;
  }
}

var vehicles = []; //Array to store details of car

vehicles.push(new Vehicle("Honda", "Civic", 2018, "White", "EX")); //creates new vehicle and pushes info vehicle info into array

//locates output element and pushes new info to page
outputEl = document.getElementById("output");
for(var count = 0; count<vehicles.length; count++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[count].info();
  outputEl.appendChild(newEl);
}
