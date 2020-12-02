function Menu() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Search() {
  console.log("searchclick");
  var x = document.getElementById("search");
  if (x.style.display === "block") {
    console.log("displayblock");
    x.style.display = "none";
  } else {
    console.log("displaynone");
    x.style.display = "block";
  }
}
