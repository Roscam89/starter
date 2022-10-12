'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




////////////////////////////////////////////
///////////////////////////////////////////

//----------------------Selecting elements ex----------------------//

//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);

const header = document.querySelector('.header');

const allSelections = document.querySelectorAll('.section');
//console.log(allSelections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons);

//console.log(document.getElementsByClassName("btn"));

//-------------Creating and inserting elemets ex-------------------//

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = `We use cookies for improved functionality and analytics. 
<button class="btn 
btn--close-cookie"> Got it</button>`;

//header.append(message);

//header.prepend(message);

//header.before(message.cloneNode(true));

//header.after(message);

//-----------Delete elements----------//

const btnCookie = document.querySelector('.btn--close-cookie');

//btnCookie.addEventListener('click', () => {
// message.innerHTML=""

// message.remove();
//});

//-------Styles-----//

message.style.backgroundColor = '#37381d';
message.style.width = '120%';

//message.style.height = '60px';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//------Atributes-----//

const logo = document.querySelector('.nav__logo');
//console.log(logo.alt);
//console.log(logo.className);

logo.alt = 'Beautifull minimalist logo';

//---- Non standard atributes----//
logo.setAttribute('designer', 'Jonas');
//console.log(logo.getAttribute('designer'));

//console.log(logo.src);
//console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
//console.log(link.href);
//console.log(link.getAttribute('href'));

//---Data atributes---//
logo.setAttribute('data-version-number', '3.0');
//console.log(logo.dataset.versionNumber);
//console.log(logo);

//----Classes----//

logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");


const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();

  //console.log(s1coords);

  //console.log(e.target.getBoundingClientRect());

  //console.log("Current scroll X/Y", window.pageXOffset, window.pageYOffset);

  //console.log("Height/width viewport", document.documentElement.clientHeight,
  // document.documentElement.clientWidth);

  //----Scroling-----//

  //window.scrollTo(s1coords.left + window.pageXOffset,
  // s1coords.top + window.pageYOffset);


  //window.scrollTo({
  // left: s1coords.left + window.pageXOffset,
  //  top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  //  });

  section1.scrollIntoView({ behavior: "smooth" });

});

const h1 = document.querySelector("h1");

const alertH1 = () => {
  alert("Great!");
};

//h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);



//----Event propagation, bubbling and and capturing 



const randomInt =
  (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomCollor = () =>
  ` rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}) `;



document.querySelector(".nav__link").addEventListener("click", function (e) {
  //this.style.backgroundColor = randomCollor();

  // e.stopPropagation()
});


document.querySelector(".nav__links").addEventListener("click", function (e) {
  // this.style.backgroundColor = randomCollor();

  //e.stopPropagation()
});


document.querySelector(".nav").addEventListener("click", function (e) {
  //this.style.backgroundColor = randomCollor();


});


//--------Event delegation------//

//const navPageBtn = document.querySelectorAll(".nav__link");

//navPageBtn.forEach(el => el.addEventListener("click",
//function (e) {
// e.preventDefault();
// const id = this.getAttribute("href");
//console.log(id)

// document.querySelector(id).scrollIntoView({ behavior: "smooth" })



//}

//));

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(e.target);


  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    // console.log("A")
  };

});


//---------DOM traversing------//

//Going downwards: child//

//console.log(h1.querySelectorAll(".highlight"));
//console.log(h1.childNodes);
//console.log(h1.children);

//h1.firstElementChild.style.color = "white";
//h1.lastElementChild.style.color = "red";

//Going upwards: parents//
//
//console.log(h1.parentNode);
//console.log(h1.parentElement);

//h1.closest(".header").style.background = "var(--gradient-secondary)";

//h1.closest("h1").style.background = "var(--gradient-primary)";

//Going sideways : siblings//

//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);

//console.log(h1.previousSibling);
//console.log(h1.nextSibling);

//console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {

  //if (el !== h1) el.style.transform = "scale(0.7)"
});




