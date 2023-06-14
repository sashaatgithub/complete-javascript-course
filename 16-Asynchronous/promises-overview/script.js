"use strict";
/*
// the function should produce the resulting value of a future promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    const lotteryDraw = Math.random();
    if (lotteryDraw >= 0.5) {
      resolve(`You won ${Math.round(lotteryDraw * 1000)} BGN`);
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});
console.log(lotteryPromise);
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

function timerInSeconds(seconds) {
  return new Promise(function (resolve) {
    return setTimeout(() => resolve(), seconds * 1000);
  });
}

timerInSeconds(5).then(() => {
  const lotteryDraw = Math.random();
  if (lotteryDraw >= 0.5) {
    return `You won ${Math.round(lotteryDraw * 1000)} BGN`;
  } else {
    return new Error("You lost your money");
  }
});


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

// The promise doesn't reject on 404 or 403 error
const getMaximumTemperature = async function () {
  let result;
  try {
    result = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.42&longitude=28.16&hourly=temperature_2m"
    );
    console.log(result);
    if (result.status != 200) {
      throw new Error("There was an error");
    }

    const expectedTemperature = await result.json();
    const max = await expectedTemperature.hourly.temperature_2m.reduce(
      (acc, el) => Math.max(acc, Number(el))
    );
    console.log(max);
  } catch (error) {
    alert(error);
  }
};
document
  .querySelector("button")
  .addEventListener("click", getMaximumTemperature);

// with async await we can't use .catch because we cannot attach it
// try-catch from the regular JS can be used for async await functions
