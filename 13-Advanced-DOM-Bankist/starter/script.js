'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const h1 = document.querySelector('h1');
// child elements - however deep, also grandchildren :)
console.log(h1.querySelectorAll('.highlight'));
// html collection of child elements (direct children only)
console.log(h1.children);

h1.firstElementChild.style.color = 'orangered';

// closest selects parents no matter how far (e.g. great-grand)
h1.closest('.header').style.background = 'var (--color-primary-opacity)';
console.log(h1.previousSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.color = 'white'
})


const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target.classList.remove('section--hidden'));
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(
  revealSection, {
  root: null,
  threshold: 0.15
}
);
const allSections = document.querySelectorAll('.section');
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

// Lazy loading images - only low resolution images are loaded in the beginning,on top there is a filter which makes the images blurred


const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, imgObserver) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  imgObserver.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});



imgTargets.forEach(img => imgObserver.observe(img));

// Style - transform - translate percentage relates to the element's own size
// Constants can and should be contained in a function which uses them

