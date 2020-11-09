const navBarToggle = document.querySelector(".landing__nav__toogle"); //Landing Nav Mobile Toogle
const question = document.querySelectorAll(".question"); //Question Buttons in Accordion Menu FAQ
const loadMoreBtn = document.querySelector(".questions__button"); //Load more Questions

const answerslist = [
  "Traffic permits are a requirement for conducting professional traffic.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
];

navBarToggle.addEventListener("click", mobileNavShowClose);
loadMoreBtn.addEventListener("click", loadMore);

function mobileNavShowClose() {
  let nav = document.querySelector(".landing__nav__links");
  let navIcon = document.querySelector("#landing__nav__toogle__icon");
  navIcon.classList.toggle("fa-bars", false);
  navIcon.classList.toggle("fa-times", true);
  nav.classList.toggle("landing__nav--mobile");
}

//Accordion menu cicle function
for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    var answer = this.nextElementSibling;
    this.classList.toggle("expanded");
    if (answer.classList.contains("no-disp")) {
      answer.classList.remove("no-disp");
    } else {
      answer.classList.add("no-disp");
    }
  });
}

function loadMore() {}

//Video section controls styling
/*
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

function updateProgress() {
  var progress = document.getElementById("progress");
  var value = 0;
  if (video.currentTime > 0) {
    value = Math.floor((100 / video.duration) * video.currentTime);
  }
  progress.style.width = value + "%";
}*/
