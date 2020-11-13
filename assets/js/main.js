//Define variables & const
const navBarToggle = document.querySelector(".landing__nav__toogle"); //Landing Nav Mobile Toogle
const question = document.querySelectorAll(".question"); //Question Buttons in Accordion Menu FAQ
const loadMoreBtn = document.querySelector(".questions__button"); //Load more Questions

//Events Listeners
navBarToggle.addEventListener("click", mobileNavShowClose);
loadMoreBtn.addEventListener("click", loadMore);

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", accordionMenu);
}

window.onscroll = function () {
  Scrolling();
};

/*************
 * Functions *
 *************/

//Change navBar colors on scrolling
function Scrolling() {
  let navBar = document.querySelector(".landing__nav");
  let logoEllipse = document.querySelector(".ellipse");
  let logo = document.querySelector(".logo--icon");
  let top = window.scrollY;
  if (top >= 100) {
    navBar.classList.add("scrolled");
    navBarToggle.style.color = "#5e5e8b";
    logo.style.color = "#5e5e8b";
    logoEllipse.style.background = "none";
  } else {
    navBar.classList.remove("scrolled");
    navBarToggle.style.color = "#FFFFFF";
    logo.style.color = "#FFF";
    logoEllipse.style.background = "#c8c8c8";
  }
}

//Mobile navigation menu function
function mobileNavShowClose() {
  let navListType = document.querySelector(".landing__nav__links");
  let navIcon = document.querySelector("#landing__nav__toogle__icon");
  navListType.classList.toggle("landing__nav--mobile");
  if (navIcon.classList.contains("fa-bars"))
    navIcon.classList.replace("fa-bars", "fa-times");
  else navIcon.classList.replace("fa-times", "fa-bars");
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
