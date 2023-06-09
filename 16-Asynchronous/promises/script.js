'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countriesAPILink = 'https://countries-api-836d.onrender.com/countries'
///////////////////////////////////////

function renderCountry(data, isNeighbour) {
    const html = `<article class="${isNeighbour ? 'neighbour' : 'country'}">
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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

// from fetch, we get a Promise immediately
function getCountryData(country) {
    const request = fetch(`${countriesAPILink}/name/${country}`)
        .then(response => response.json())
        // One way of error handling
        // err => alert(err))
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            return fetch(`${countriesAPILink}/name/${neighbour}`);
        })
        .then(response => response.json())
        .then(neighbour => renderCountry(neighbour[0], true))
        // Errors propagate down the chain until they are caught
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something went wrong. ${err.message}`)
        })
};

btn.addEventListener('click', function () { getCountryData('italy') });

// The fetch only rejects if the user loses internet connection


