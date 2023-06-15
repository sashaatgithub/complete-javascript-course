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
    // The await on the following two lines is important
    const expectedTemperature = await result.json();
    const max = await expectedTemperature.hourly.temperature_2m.reduce(
      (acc, el) => Math.max(acc, Number(el))
    );
    return max;
  } catch (error) {
    alert(error);
    throw error;
  }
};
document
  .querySelector("button")
  .addEventListener("click", getMaximumTemperature);
getMaximumTemperature().then((city) => console.log(city));

// with async await we can't use .catch because we cannot attach it
// try-catch from the regular JS can be used for async await functions

const getMaximumTemperature1 = async function () {
  let result;
  result = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.42&longitude=28.16&hourly=temperature_2m"
  )();
};
(async function () {
  let result;
  try {
    result = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.42&longitude=28.16&hourly=temperature_2m"
    );
    const expectedTemperature = await result.json();
    const max = await expectedTemperature.hourly.temperature_2m.reduce(
      (acc, el) => Math.max(acc, Number(el))
    );
    console.log(`This is the maximum temperature: ${max}`);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Finished getting location");
  }
})();

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} ({response.status})`);
//     return response.json();
//   });
// };

async function getJSON(url, errorMsg = "Something went wrong") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg} ({response.status})`);
  const json = await response.json();
  console.log(json);
  return json;
}

async function getTemperatureData() {
  const json = await getJSON(
    "https://api.open-meteo.com/v1/forecast?latitude=43.42&longitude=28.16&hourly=temperature_2m"
  );
  const hourly = await json.hourly;
  return hourly;
}
(async () => {
  console.log(await getTemperatureData());
})();
