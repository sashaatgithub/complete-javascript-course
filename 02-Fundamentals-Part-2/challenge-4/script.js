"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  let tipPercentage;
  if (bill > 50 && bill < 300) {
    tipPercentage = 15;
  } else tipPercentage = 20;
  return (bill * tipPercentage) / 100;
};

// variant 1
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips, totals);

// Variant 2 - works too
// for (let i = 0; i < bills.length; i++) {
//     tips[i] = (calcTip(bills[i]));
//     totals[i] = bills[i] + tips[i];
// }
console.log(tips, totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
