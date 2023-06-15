'use strict';
const img1Link =
  'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg';
let imgSrc = img1Link;

const imgHtml = `<img class="img hidden" src="${imgSrc}"/>`;
// Below is the resolved promise saved as a constant
const loadImage = new Promise((resolve, reject) => {
  const attachImage = document
    .querySelector('h1')
    .insertAdjacentHTML('beforeend', imgHtml);
  const img = document.querySelector('.img');
  img.addEventListener('load', resolve(img));
});

// loadImage
//   .then(img => {
//     img.classList.remove('hidden');
//     return img;
//   })
//   .then(img => {
//     console.log('oops');
//     setTimeout(() => {
//       img.classList.add('hidden');
//       return img;
//     }, 4000);
//   });

async function fadeoutTimeoutSec(sec, img) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      img.classList.add('hidden');
      // a promise doesn't need to have a resolve value, but it needs at least to resolve in one scenario
      resolve;
      // resolve(img);
    }, sec * 1000);
  });
}
(async function () {
  const img = await loadImage;
  img.classList.remove('hidden');
  await fadeoutTimeoutSec(3, img);
})();

/*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

const img2Link = 'https://media.istockphoto.com/id/1205716515/photo/landscape-from-dzhano-peak-pirin-mountain-bulgaria.jpg?s=612x612&w=0&k=20&c=rbWm6JfFBHdRdT-JaVa4SzJBMi6qvldiK43mySPtoms=';

let imgSrc = img1Link;
/*
const imgHtml = `<img class="img" src="${imgSrc}"/>`
// const imgHtml = `<img class="img hidden" src="${imgSrc}"/>`

// fetch(img1Link)
document.querySelector('h1').insertAdjacentHTML('beforeend', imgHtml);

// const loadNResolve = new Promise((resolve) => {
//   addEventListener('load', resolve);
// });

function loadNResolve(img) {
  return new Promise(function (resolve) {
    img.addEventListener('load', img.classList.toggle('hidden'))
  })
}

const waitNToggle = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve(document.querySelector('.img').classList.toggle('hidden')), seconds * 1000);
  })
};

loadNResolve(document.querySelector('.img'))
  .then(() => {
    return waitNToggle(2);
  })
  .then(() => {
    return waitNToggle(2);
  });

  */

/*
const imgContainer = document.querySelector('h1');

const creteImage = function (imgPath) {
return new Promise(function (resolve, reject) {
  const img = document.createElement('img');
  img.src = imgPath;
  img.addEventListener('load', function () {
    imgContainer.append(img);
    resolve(img);
  });
  img.addEventListener('error', function () {
    reject(new Error('Image not found'))
  })
});
};



const whereAmI = async function (country) {
const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
}
*/
