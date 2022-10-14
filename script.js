'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const h1 = document.querySelector('h1');
const btnCookie = document.querySelector('.btn--close-cookie');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

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

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

btnScrollTo.addEventListener('click', e => {
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

  section1.scrollIntoView({ behavior: 'smooth' });
});

const alertH1 = () => {
  alert('Great!');
};

//h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//----Event propagation, bubbling and and capturing

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomCollor = () =>
  ` rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}) `;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //this.style.backgroundColor = randomCollor();
  // e.stopPropagation()
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomCollor();
  //e.stopPropagation()
});

document.querySelector('.nav').addEventListener('click', function (e) {
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

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(e.target);

  //==============================================

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    // console.log("A")
  }
});

//==============================================

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

//console.log(document.querySelector('.operations__tab-container'));

//document
// .querySelector('.operations__tab-container')
// .addEventListener('click', function (e) {
//   e.preventDefault();
// const tabBtn = e.target.classList;

//   if (tabBtn.length < 4) {
// tabBtn.add('operations__tab--active');
// tabBtn.previousElementSibling.remove('operations__tab--active');
//  }
// tabBtn.previousElementSibling.remove('operations__tab--active');

//  console.log(tabBtn);
// });

//=================================================

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(` .operations__content--${clicked.dataset.tab} `)
    .classList.add('operations__content--active');
});

//==============================================

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link && logo) el.style.opacity = 0.5;
//     });

//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   e.target
//     .closest('.nav')
//     .querySelectorAll('.nav__link')
//     .forEach(el => {
//       if (el !== e.target && logo) el.style.opacity = 1;
//     });

//   logo.style.opacity = 1;
// });

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link && logo) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//======================================================================//
// const initalCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (this.window.scrollY > initalCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky navigation : Intersection Obesrver API
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries, observer) {
  entries.forEach(ent => {
    //  console.log(ent);
    if (ent.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

//=======================================================================

//Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//========================================
//Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

//=================================
//Slider component

//FUNCTIONS

const fSlider = function () {
  const allSliders = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let currentSlide = 0;
  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    allSliders.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}">
      </button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slides) {
    allSliders.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - slides)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === allSliders.length - 1) {
      currentSlide = 0;
    } else currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = allSliders.length - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  //BUTTONS AND EVEN LISTENERS
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  init();
};
fSlider();

//========================================================================
