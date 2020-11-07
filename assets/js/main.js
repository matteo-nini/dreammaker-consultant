//Landing Nav Mobile Toogle

let mainNav = document.getElementById("navbar");
let navBarToggle = document.getElementById("js-navbar-toggle");
let icon = document.getElementById("landing__nav__toogle__icon");
let blob = document.getElementsByClassName("blob");

navBarToggle.addEventListener("click", function () {
  icon.classList.toggle("fa-times");
  mainNav.classList.toggle("active");
});

//Video section controls styling
var video = document.getElementById("video");

function togglePlayPause() {
  var playpause = document.getElementById("playpause");
  var play = "<i class='fas fa-play fa-3x'></i>";
  var pause = "<i class='fas fa-pause fa-3x'></i>";
  if (video.paused || video.ended) {
    playpause.title = "pause";
    playpause.style.display = "none";
    video.play();
  } else {
    playpause.title = "play";
    playpause.innerHTML = play;
    video.pause();
  }
}
/*
function updateProgress() {
  var progress = document.getElementById("progress");
  var value = 0;
  if (video.currentTime > 0) {
    value = Math.floor((100 / video.duration) * video.currentTime);
  }
  progress.style.width = value + "%";
}*/

// Accordion FAQ
var acc = document.getElementsByClassName("question");

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     var panel = this.nextElementSibling;
//     panel.classList.toggle("no-disp");
//   });
// }
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
