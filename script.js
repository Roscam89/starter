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

header.after(message);

//-----------Delete elements----------//

const btnCookie = document.querySelector('.btn--close-cookie');

btnCookie.addEventListener('click', () => {
  // message.innerHTML=""

  message.remove();
});

//-------Styles-----//

message.style.backgroundColor = '#37381d';
message.style.width = '120%';

//message.style.height = '60px';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//------Atributes-----//

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautifull minimalist logo';

//---- Non standard atributes----//
logo.setAttribute('designer', 'Jonas');
console.log(logo.getAttribute('designer'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//---Data atributes---//
//logo.setAttribute('data-version-number', '3.0');
console.log(logo.dataset.versionNumber);
console.log(logo);
