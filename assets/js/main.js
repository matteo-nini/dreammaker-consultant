window.onscroll = function () {
  Scrolling();
};

//Define variables & const
const navBarToggle = document.querySelector(".landing__nav__toogle"); //Landing Nav Mobile Toogle
const question = document.querySelectorAll(".question"); //Question Buttons in Accordion Menu FAQ
const loadMoreBtn = document.querySelector(".questions__button"); //Load more Questions
const userName = document.querySelector(".slide__user__info__name"); //Name of reviewer
const userReview = document.querySelector(".slide__content p"); //User review
const userRating = document.querySelector(".slide__user__info__rating"); //user rating
const nextSlide = document.querySelector(".slide__next"); //Next button slider

const names = ["Simon Sandberg", "John Smith", "Sarah Miller"]; //Array of names for viewres
const avatars = [
  "assets/images/webp/reviews_section/review_woman.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz1xGnb3ehO7hFlcx6InC4Km8V5pPo52e5HA&usqp=CAU",
  "https://deascuola-nephila-bucket-prod.s3.amazonaws.com/filer_public_thumbnails/filer_public/33/7e/337ef584-09cf-48c4-9ab5-509c28c451b6/esamestato2020_prof_donna.png__950x0_q85_crop_subsampling-2.png",
]; //array of avatars
const reviews = [
  "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur aliquam eos cumque amet, neque ducimus velit quo explicabo? Temporibus vero enim aspernatur ipsa sint fuga! Sapiente inventore iure hic!",
  "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS). <br><br>Some other text here.",
]; // array of reviews

const star = " <i class='fas fa-star'></i> "; //string for the star char
let n = 0; //index

//Inizialize contents
document.slide__user__avatar.src = avatars[n]; //img of user in slide
userName.innerHTML = `${names[n]}`;
userReview.innerHTML = `${reviews[n]}`;
userRating.innerHTML = `${star.repeat(5) + 5} star`;

//Events Listeners

navBarToggle.addEventListener("click", mobileNavShowClose);
loadMoreBtn.addEventListener("click", loadMore);
nextSlide.addEventListener("click", changeSlide);

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", accordionMenu);
}

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
  let keyframes = [
    { opacity: "0" },
    { height: "auto" },
    { height: "auto" },
    { opacity: "1" },
  ];
  let answer = question.currentTarget.nextElementSibling;
  question.currentTarget.classList.toggle("expanded");
  if (answer.classList.contains("no-disp") && !answer.style.maxHeight) {
    answer.classList.remove("no-disp");
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.classList.add("no-disp");
    answer.style.maxHeight = null;
  }
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

  const questions = document.querySelectorAll(".questions__list");

  for (let i = 0; i < 5; i++) {
    let newBox = document.createElement("div");
    newBox.className = "question__box";

    let newQuest = document.createElement("button");
    newQuest.className = "question";
    newQuest.innerHTML = `${qList[Math.floor(Math.random() * qList.length)]}`;

    let newAnswer = document.createElement("div");
    newAnswer.classList.add("answer", "no-disp");
    newAnswer.innerHTML = `${aList[Math.floor(Math.random() * aList.length)]}`;

    newBox.appendChild(newQuest);
    newBox.appendChild(newAnswer);
    if (!(i % 2)) questions[0].appendChild(newBox);
    else questions[1].appendChild(newBox);
    newQuest.addEventListener("click", accordionMenu);
  }
  loadMoreBtn.style.display = "none";
}

//change slide function
function changeSlide() {
  let slide = document.querySelector(".slide");

  let slideOut = [
    { transform: "translate(20%, 0%)" },
    { opacity: "0.8" },
    { transform: "translate(50%, 0%)" },
    { opacity: "0.5" },
    { transform: "translate(70%, 0%)" },
    { opacity: "0.3" },
    { transform: "translate(100%, 0%)" },
    { opacity: "0" },
    { transform: "translate(-100%, 0%)" },
    { opacity: "0" },
    { transform: "translate(-70%, 0%)" },
    { opacity: "0.3" },
    { transform: "translate(-50%, 0%)" },
    { opacity: "0.5" },
    { transform: "translate(-20%, 0%)" },
    { opacity: "0.2" },
    { transform: "translate(0%, 0%)" },
    { opacity: "1" },
  ];

  slide.animate(slideOut, 1000);
  n++;
  if (n > names.length - 1) n = 0;
  document.slide__user__avatar.src = avatars[n];
  userName.innerHTML = `${names[n]}`;
  userReview.innerHTML = `${reviews[n]}`;
  userRating.innerHTML = `${star.repeat(n + 1) + (n + 1)} star`;
}

//Form validation function
function formValidate(event) {
  let name = document.querySelector("#name");
  let password = document.querySelector("#password");
  let Error = document.querySelectorAll(".login__form__validate");
  let ck_password = new RegExp(/^[0-9a-zA-Z]{4,8}$/);
  event.preventDefault();
  if (name.value == "" || name.value == null) {
    name.focus();
    name.style.border = "2px solid #f01f35";
    name.style.color = "#f01f35";
    Error[0].style.color = "#f01f35";
    Error[0].innerHTML = "Please, enter a valid name";
  } else {
    name.style.border = "1px solid #00B1BD";
    name.style.color = "#00B1BD";
    Error[0].style.color = "#00B1BD";
    Error[0].innerHTML = "Ok!";
  }
  if (password.value == "" || !ck_password.test(password.value)) {
    password.focus();
    password.style.border = "2px solid #f01f35";
    password.style.color = "#f01f35";
    Error[1].style.color = "#f01f35";
    Error[1].innerHTML = "Password must be long between 4 and 8";
  } else {
    name.style.border = "1px solid #00B1BD";
    name.style.color = "#00B1BD";
    Error[0].style.color = "#00B1BD";
    Error[0].innerHTML = "Ok!";
    password.style.border = "1px solid #00B1BD";
    password.style.color = "#00B1BD";
    Error[1].style.color = "#00B1BD";
    Error[1].innerHTML = "Ok!";
    return true;
  }
}
