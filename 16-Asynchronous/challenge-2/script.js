'use strict'
const img1Link = 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg';
const img2Link = 'https://media.istockphoto.com/id/1205716515/photo/landscape-from-dzhano-peak-pirin-mountain-bulgaria.jpg?s=612x612&w=0&k=20&c=rbWm6JfFBHdRdT-JaVa4SzJBMi6qvldiK43mySPtoms=';

let imgSrc = img1Link;
const imgHtml = `<img class="img hidden" src="${imgSrc}"/>`

// fetch(img1Link)
document.querySelector('h1').insertAdjacentHTML('beforeend', imgHtml);
const img = document.querySelector('img');
img.addEventListener('load', img.classList.remove('hidden'));