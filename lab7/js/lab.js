/**
 Author:    Juan Trinidad
 Created:   02.23.2021
 License:   Public Domain
 **/

//Functions
function sortUserName() {
  //Declare var userName for user to input name//
  var userName = window.prompt("Enter your name please!");
  console.log("userName =", userName);

  //Declare var nameSorted to put every char to lower case then split and sort then combine//
  var nameSorted = userName.toLowerCase().split("").sort().join("");
  console.log("nameSorted =", nameSorted);

  //return nameSorted value when sortUserName function is called
  return nameSorted;
}

// Print Out
document.write("Here is your name in alphabet: ",
  sortUserName(), "<br>");
