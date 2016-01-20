$(document).ready(function(){

  var day = new Date("April 2, 2016");
  var now = new Date();
  var timeDiff = day.getTime() - now.getTime();
  if (timeDiff <= 0) {
    clearTimeout(timer);
    document.write("Enjoy Spring Break!");
  }

  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  $("#countdown").ready(function(){
    $("#countdown").append(days + " days.");

  var timer = setTimeout('function()',1000);

  });
});
