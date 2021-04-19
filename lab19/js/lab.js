/**
 Author:    Juan Trinidad
 Created:   04.19.2021
 License:   Public Domain
 **/

 // URL = "https://www.boredapi.com/api/activity/"
 // URL = "https://api.kanye.rest/"
 URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

 // attach click action to button
 $('#action').click(function(){
     $.ajax({
         // The URL for the request
         url: URL,
         type: "GET",
     })
     // If request succeeds
     .done(function(data) {
         console.log(data);
         $("#output").append("<p>The most stable smart man in the room says: <b>" + data.message);

     })
 });
