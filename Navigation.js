function Menu() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





$(document).ready(function(){
  $("#SearchButton").click(function(){
    $("#search").toggle();
  });
});