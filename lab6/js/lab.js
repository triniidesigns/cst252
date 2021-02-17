/**
 Author:    Juan Trinidad
 Created:   04.16.2021
 License:   Public Domain
 **/

//Array
var myTransport = ["car", "bus"];

//Objects
var myMainRide = {
  make : "Honda",
  model : "Civic",
  color : "White",
  year : 2018,
  age : function() {
    return 2021 - age;
  }
};

// Alternative Objects //
  // var myMainRide = {};
  //  myMainRide.make = "Honda";
  //  myMainRide.model = "Civic";
  //  myMainRide.color = "White";
  //  myMainRide.year = 2018;

// Print Out
document.write("My transports: ", myTransport, "<br>");
document.write("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
