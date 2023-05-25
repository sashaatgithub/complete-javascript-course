'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(Number(plane[2]));
console.log('B737'[1]);
console.log('B768686'.length);
console.log(airline.indexOf('r'));
console.log(airline.slice(4));
console.log(airline.lastIndexOf('P'));
console.log(airline.slice(airline.lastIndexOf('P')));
console.log(airline.slice(0, airline.indexOf(' ')));

const checkMiddleSeat = function (seat) {
  return (seat.slice(-1) === 'B' || seat.slice(-1)) === 'E' ? true : false;
};

console.log(checkMiddleSeat('12B'));

console.log(airline.toLowerCase());
const passenger = 'jONaS';
const passengerLower = passenger.toLowerCase();
console.log(passenger[0].toUpperCase() + passengerLower.slice(1));

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const cleanedEmail = loginEmail.toLowerCase().trim();
console.log(cleanedEmail === email);
console.log(cleanEmail(loginEmail) === email);
function cleanEmail(loginEemail) {
  return loginEmail.toLowerCase().trim();
}

const priceGB = '288,999,0000 GBP';
const priceUS = priceGB.replaceAll(',', '.');
console.log(priceUS);

console.log(priceGB.replace(/,/g, '.'));
console.log(plane.includes('0'));
console.log(plane.startsWith('A'));

console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(lastName);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const cardNumber = '1234123456789012';
const maskedCard = cardNumber.slice(-4).padStart(cardNumber.length, '*');
console.log(maskedCard);

cardNumber.repeat(2);
