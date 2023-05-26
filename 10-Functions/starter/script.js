'use strict';
// Default values. They can be of any type, and can be calculated based on the already set parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 100,
  revenue = 70 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    revenue,
  };
  console.log(booking);
  bookings.push(booking);
};
// Keeping a parameter at it default is done by writing undefined there.

const flight = 'LH234';
const jonas = {
  fullName: 'Jonas Schmedtman',
  passport: '124kluhast109342',
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.fullName = 'Mr.' + passenger.fullName;
  if (passenger.passport === '124kluhast109342') {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// String in JavaScript is a primitive.
// Passing an object to a function means manipulating it directly;
// JS has only passing by value
// We pass in a reference, but not by reference. We're not passing in a memory address.
// JavaScript treats functions as first-class citizens, they are simply values.We can store them wherever we like and pass them to whoever.
// We can store functions as parameters
// Higher-order function calls callback function later. Or, it can return a function.

const oneWord = function (newString) {
  return newString.replace(' ', '').toLowerCase();
};

const transformer = function (str, fn) {
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('And sdkjhf', oneWord);
// Callback functions are important because they allow for abstraction.

// addEvenListener is a higher-order function;
