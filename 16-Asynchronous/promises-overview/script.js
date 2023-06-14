"use strict";
// the function should produce the resulting value of a future promise
const lotteryPromise = new Promise(function (resolve, reject) {
  const lotteryDraw = Math.random();
  if (lotteryDraw >= 0.5) {
    resolve(`You won ${Math.round(lotteryDraw * 1000)} BGN`);
  } else {
    reject("You lost your money");
  }
});
console.log(lotteryPromise);
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

/*
const countriesNameAPILink =
  "https://countries-api-836d.onrender.com/countries/name";

const renderError = function (err) {
  console.log(err.message);
};

// taking fetch out in a helper function resulted in it returning undefined...
const getCountryData = function (country) {
  fetch(`${countriesNameAPILink}/${country}`)
    .then(function (response) {
      // .json() also returns a promise
      console.log(response);
      if (!response.ok) {
        throw new Error(`An error occured ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].capital);
    })
    .catch((err) => renderError(err.message));
};

getCountryData("france");
*/
