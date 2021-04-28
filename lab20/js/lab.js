/**
 Author:    Juan Trinidad
 Created:   04.27.2021
 License:   Public Domain
 **/

$.ajax({
  url: "https://xkcd.com/info.0.json",
  method: "GET",
  success: function(data){
    console.log(data);
    $("h1").html(data.title);
    $(".data").html(data.alt);
    // var newImage = $("<img>");
    // newImage.attr("src", data.img);
    // newImage.addClass("bigpic");
    // $(".biography").append(newImage);
  }
})
