//Landing Nav Mobile Toogle

let mainNav = document.getElementById("navbar");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
