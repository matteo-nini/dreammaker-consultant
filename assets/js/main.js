const navBarToggle = document.querySelector(".landing__nav__toogle"); //Landing Nav Mobile Toogle
const question = document.querySelectorAll(".question"); //Question Buttons in Accordion Menu FAQ
const loadMoreBtn = document.querySelector(".questions__button"); //Load more Questions

navBarToggle.addEventListener("click", mobileNavShowClose);

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", accordionMenu);
}
loadMoreBtn.addEventListener("click", loadMore);
//question.forEach(accordionMenu(quest));

//Mobile navigation menu function
function mobileNavShowClose() {
  let nav = document.querySelector(".landing__nav__links");
  let navIcon = document.querySelector("#landing__nav__toogle__icon");
  navIcon.classList.toggle("fa-bars", false);
  navIcon.classList.toggle("fa-times", true);
  nav.classList.toggle("landing__nav--mobile");
}

//Accordion menu for questions function
function accordionMenu(question) {
  let answer = question.currentTarget.nextElementSibling;
  question.currentTarget.classList.toggle("expanded");
  if (answer.classList.contains("no-disp")) {
    answer.classList.remove("no-disp");
  } else answer.classList.add("no-disp");
}

//Load more questions button function
function loadMore() {
  const qList = [
    "How much does a commercial traffic permit cost for goods?",
    "Where to look for a traffic permit?",
    "How is the sample for a professional traffic permit booked?",
    "Are there differences between a traffic permit and a professional traffic permit?",
  ];

  const aList = [
    "Traffic permits are a requirement for conducting professional traffic.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "Commercial traffic permits cost from 50$ to 70$, depends of using cases",
    "With a professional traffic permit you can afford to take all goods you want!",
  ];

  let randomQuest = Math.floor(Math.random() * qList.length);
  let randomAns = Math.floor(Math.random() * aList.length);

  const questions = document.querySelector(".questions__list");

  let newBox = document.createElement("div");
  newBox.className = "question__box";

  let newQuest = document.createElement("button");
  newQuest.className = "question";
  newQuest.innerHTML = `${qList[randomQuest]}`;

  let newAnswer = document.createElement("div");
  newAnswer.classList.add("answer", "no-disp");
  newAnswer.innerHTML = `${aList[randomAns]}`;

  newBox.appendChild(newQuest);
  newBox.appendChild(newAnswer);
  questions.appendChild(newBox);
  newQuest.addEventListener("click", accordionMenu);
}

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
