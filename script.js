/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */



// COMMUNITY.html - TABS
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
//  document.getElementById("defaultOpen").click();


// ABOUT.html - TABS
//function openYear(evt, Year) {
//  var i, tabcontent2, tablinks;
//  tabcontent2 = document.getElementsByClassName("tabcontent2");
//  for (i = 0; i < tabcontent2.length; i++) {
//    tabcontent2[i].style.display = "none";
//  }
//  tablinks = document.getElementsByClassName("tablinks");
//  for (i = 0; i < tablinks.length; i++) {
//    tablinks[i].className = tablinks[i].className.replace(" active", "");
//  }
//  document.getElementById(Year).style.display = "block";
//  evt.currentTarget.className += " active";
//}




function menu() {
  var x = document.getElementById("Navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// Search
function Search() {
  var x = document.getElementById("Search");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function SearchButton(x) {
  x.classList.toggle("fa-times fa-lg");
}


