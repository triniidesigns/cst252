/**
 Author:    Juan Trinidad
 Created:   03.10.2021
 License:   Public Domain
 **/

//function with conditional statement
function FizzBuzzBoom() {
  for (var i=1; i <=200; i++) {
    var outputEl = document.getElementById("output");
    var newEl = document.createElement("p");

    //conditional statement
    if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      console.log(i + " - FizzBuzzBoom");
      newEl.innerHTML = i + " - FizzBuzzBoom";
      outputEl.appendChild(newEl);
    } else if(i % 3 == 0 && i % 5 == 0) {
      console.log(i + " - FizzBuzz");
      newEl.innerHTML = i + " - FizzBuzz";
      outputEl.appendChild(newEl);
    } else if(i % 3 == 0) {
      console.log(i + " - Fizz");
      newEl.innerHTML = i + " - Fizz";
      outputEl.appendChild(newEl);
    } else if(i % 5 == 0) {
      console.log(i + " - Buzz");
      newEl.innerHTML = i + " - Buzz";
      outputEl.appendChild(newEl);
    } else if(i % 7 == 0) {
      console.log(i + " - Boom");
      newEl.innerHTML = i + " - Boom";
      outputEl.appendChild(newEl);
    } else {
      console.log(i);
      newEl.innerHTML = i;
      outputEl.appendChild(newEl);
    }
  }
  return FizzBuzzBoom;
}

//output
FizzBuzzBoom();
