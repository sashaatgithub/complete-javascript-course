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
// JS doesn't support classes as such, as blueprints
// OOP principles Abstraction, Encapsulation, Inheritance and Polymorphism improve class design
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(973, 'Sasha Shipilova');
// 'this' points to new lufthansa object

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

//'this' in functions points to undefined
// call, apply and bind are all function methods which set the function's 'this' keyword
// a function in JS is really just an object
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings.bookings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'SW',
  bookings: [],
};

book.apply(swiss, [4646, 'Mary Lady']);

// bind method creates the function for each object instance
const bookEW = book.bind(eurowings);
const bookEW23 = book.bind(eurowings, 23);
// partial application
bookEW23('Ronaldo');

// We can always use call PaymentMethodChangeEvent. If we need, we can spread

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// this is because there is no 'this' keyword in this function. But we are setting the default value
console.log(addVAT(100));

function addVAT1(vat) {
  return function addTax(value) {
    return value + value * vat;
  };
}
const addVAT24 = addVAT1(0.24);
console.log(addVAT24(100));
