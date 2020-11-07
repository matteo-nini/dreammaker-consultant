//Landing Nav Mobile Toogle

let mainNav = document.getElementById("navbar");
let navBarToggle = document.getElementById("js-navbar-toggle");
let icon = document.getElementById("landing__nav__toogle__icon");

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
