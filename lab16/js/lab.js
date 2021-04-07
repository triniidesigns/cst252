/**
 Author:    Juan Trinidad
 Created:   04.06.2021
 License:   Public Domain
 **/

//push button with the id of button
 $("#output").append("<button id='button'>Press");

//when click, pop up message alert
 $("button").click(function() {
   alert("Thanks for clicking!");
 });

 //change button color
 $("#button").css("background-color", "#22bb45");
