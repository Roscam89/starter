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
