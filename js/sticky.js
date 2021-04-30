// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var section = document.getElementById("section");
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = section.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}