// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const inputArray = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let min;
let max;
// function calculateMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// function calculateMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function calculateAmplitude(arr) {
//   return calculateMax(arr) - calculateMin(arr);
// }

// console.log(calculateAmplitude(inputArray));

// more efficient option 2 which also takes into account the case where first element is error:

function findFirstNumberIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maybeNumber = arr[i];
    if (typeof maybeNumber === "number") {
      return i;
    }
  }
  return "No number found";
}

function calculateAmplitude(arr) {
  let firstNumberIndex = findFirstNumberIndex(arr);
  let firstNumber = arr[firstNumberIndex];
  let min = firstNumber;
  let max = firstNumber;
  for (let i = firstNumberIndex; i < arr.length; i++) {
    let curr = arr[i];
    if (typeof curr !== "number") continue;
    if (curr > max) {
      max = curr;
    } else if (curr < min) {
      min = curr;
    }
  }
  if (max && min) {
    return max - min;
  } else return 0;
}

console.log(calculateAmplitude(inputArray));
