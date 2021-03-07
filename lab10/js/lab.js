/**
 Author:    Juan Trinidad
 Created:   03.7.2021
 License:   Public Domain
 **/

 //Functions **https://stackoverflow.com/a/32446873**
 function sortUserName() {
   //Declare var userName for user to input name//
   var userName = document.getElementById("user-name").value;
   var result = document.getElementById("result");
   console.log("userName =", userName);

   //Declare var nameSorted to put every char to lower case then split and sort then combine//
   var nameSorted = userName.toLowerCase().split("").sort().join("");
   console.log("nameSorted =", nameSorted);

   //Display Results
   result.textContent = 'Your name is: ' + nameSorted;

   //return nameSorted value when sortUserName function is called
   return nameSorted;
}

//Create event listener for button
var button = document.getElementById("my-button");
button.addEventListener("click", sortUserName);


 // var button = document.getElementById("my-button");
 // button.addEventListener("click", function() {
 //   inputValue = document.getElementById("user-name").value;
 //   console.log("Your input:", inputValue);
 // });
