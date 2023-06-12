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
/*
function resolveМе(diceRoll) { return `You win ${diceRoll * 100} USD!` };

// A Promise is a special kind of a built-in object
// Executor function. The promise constructor automatically executes the ex function
const lotteryPromise = new Promise(function (resolve, reject) {
    // 67+72 should work but don't
    // function (resolveMe, reject) {
    console.log('Lottery draw is happening');
    setTimeout(function () {
        const diceRoll = Math.random();
        if (diceRoll >= 0.5) {
            // resolveMe(diceRoll)
            // 74 should work but doesn't
            // resolve((diceRoll) => `You win ${diceRoll * 100} USD!`);
            resolve(`You win ${diceRoll * 100} USD!`);
        } else reject(new Error('You lost your money'));
    }, 2000)
});

lotteryPromise.then(res => console.log(res))
    .catch(err => console.error(err));

// Whatever value we pass into the resolve ffunction

function resolveMe(diceRoll) { return `You win ${diceRoll * 100} USD!` };
// A Promise is a special kind of a built-in object
// Executor function. The promise constructor automatically executes the ex function
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening');
    setTimeout(function () {
        const diceRoll = Math.random();
        if (diceRoll >= 0.1) {
            // This works
            resolve(resolveMe(diceRoll));
            // This works
            // resolve(`You win ${diceRoll * 100} USD!`);
            // This works
            // resolve((() => `You win ${diceRoll * 100} USD!`)())
            // This returns the function as a string
            // resolve(() => `You win ${diceRoll * 100} USD!`)
            // resolve(typeof(() => `You win ${diceRoll * 100} USD!`)) // returns "function"
        } else reject(new Error('You lost your money'));
    }, 2000)
});
lotteryPromise.then(res => console.log(res))
    .catch(err => console.error(err));

    */

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening');
    setTimeout(function () {
        const diceRoll = Math.random();
        if (diceRoll >= 0.5) {
            resolve(`You win ${diceRoll * 100} USD!`);
        } else reject(new Error('You lost your money'));
    }, 2000)
});

lotteryPromise.then(res => console.log(res))
    .catch(err => console.error(err));

// Promisifying - converting callback-based asyncronous behavior to promise-based
// Normally it is creating and returning a promise
// Timers never fail, so there is no reject parameter
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1).then(() => {
    console.log('1 second passed');
    return wait(1);
})
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('4 second passed');
        return wait(1);
    })

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error('Problem'));

// Promisifying
/*

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);

console.log('Getting position');

// Same as 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};
*/

// Same as
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // Now resolve itself is a callback function, which will get called with Position
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const apiBaseURL = 'https://geocode.xyz/';
const formatParam = 'geoit=json';

const locateMe = function () {
    const position = getPosition()
        // .then(position => {
        //     console.log(position.coords);
        //     return whereAmI(position.coords.GeolocationCoordinates.latitude, position.coords.GeolocationCoordinates.longitude);
        // });
        .then(pos => {
            return fetch(`${apiBaseURL}/${pos.coords.latitude},${pos.coords.longitude}?${formatParam}`)
        })
        .then(response => {
            let message;
            if (response.ok) {
                return response.json()
                // .city;
            }
            if (response.error) {
                message = `Something went wrong: ${error.description}`;

            } else {
                message = `Something went wrong ${response.status}`;
            } throw new Error(message)
        });
}

btn.addEventListener('click', locateMe);


// function getCity(latitude, longitude) {
//     const response = fetch(`${apiBaseURL}/${latitude},${longitude}?${formatParam}`)
//         .then(response => {
//             let message;
//             if (response.ok) {
//                 return response.json()
//                 // .city;
//             }
//             if (response.error) {
//                 message = `Something went wrong: ${error.description}`;

//             } else {
//                 message = `Something went wrong ${response.status}`;
//             } throw new Error(message)
//         })
// }

// function getCityPromise(latitude, longitude) {
//     return function (resolve, reject) {
//         getCity(resolve, reject);
//     }
// }

// whereAmI without brackets because we are not going to call it immediately 


// function getCity(latitude, longitude) {
//     const response = fetch(`${apiBaseURL}/${latitude},${longitude}?${formatParam}`)
//         .then(response => {
//             let message;
//             if (response.ok) {
//                 return response.json()
//                 // .city;
//             }
//             if (response.error) {
//                 message = `Something went wrong: ${error.description}`;

//             } else {
//                 message = `Something went wrong ${response.status}`;
//             } throw new Error(message)
//         })
// }
// This commented whereAmI doesn't work
// const whereAmI = function (latitude, longitude) {
//     return new Promise(function (resolve, reject) {
//         getCity(resolve, reject){`You are in ${getCityPromise(latitude, longitude)}` };
//     });
// }
// console.log(whereAmI);

// getCity(155.74, 237.66);

function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};



