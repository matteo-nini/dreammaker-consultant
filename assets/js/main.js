//Landing Nav Mobile Toogle

let mainNav = document.getElementById("navbar");
let navBarToggle = document.getElementById("js-navbar-toggle");
let icon = document.getElementById("landing__nav__toogle__icon");

navBarToggle.addEventListener("click", function () {
  icon.classList.toggle("fa-times");
  mainNav.classList.toggle("active");
});
