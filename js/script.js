
 // Open the drawer when the menu ison is clicked.

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
var header = document.getElementById("drawer");

// menu for mobile screens
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

// Scroll to reveal content
window.onscroll = function() {stickyFun()};

var sticky = header.offsetTop;

function stickyFun() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
