'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countriesAPILink = 'https://countries-api-836d.onrender.com/countries'
///////////////////////////////////////

// function getCountryData(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `${countriesAPILink}/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         // 'this' is the request
//         const [data] = JSON.parse(this.responseText);
//         console.log(data)

//         const html = `<article class="country">
// <img class="country__img" src="${data.flag}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// </div>
// </article>`;

//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1;
//     });
// }
// getCountryData('Russia');
// getCountryData('burundi');
// getCountryData('Iraq');

function renderCountry(data) {
    const html = `<article class="country">
<img class="country__img" src="${data.flag}"/>
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}


// from fetch, we get a Promise immediately
function getCountryData(country) {
    const request = fetch(`${countriesAPILink}/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryData('italy');


