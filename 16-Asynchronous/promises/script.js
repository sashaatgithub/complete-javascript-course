'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countriesAPILink = 'https://countries-api-836d.onrender.com/countries'
///////////////////////////////////////

function showUI() {
    countriesContainer.style.opacity = 1;
}
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
    showUI();
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    showUI();
}

const getJSON = function (url, errorMsg = 'Something went wrong') {
    // the first word 'return is really important. It makes the function return the promise
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
}

// from fetch, we get a Promise immediately
function getCountryData(country) {
    getJSON(`${countriesAPILink}/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders?.[0];
            return getJSON(`${countriesAPILink}/name/${neighbour}`, 'Neighbour country not found')
        })
        .then(neighbour => renderCountry(neighbour[0], true))
        .catch(err => {
            renderError(`Something went wrong. ${err.message}`)
        })
        .finally(() => {
            showUI();
        })
};

btn.addEventListener('click', function () { getCountryData('Australia') });

// fetch function only rejects if the user loses internet connection, or we manually throw an error
