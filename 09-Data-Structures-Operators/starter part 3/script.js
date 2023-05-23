'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
const wordSet = new Set('mama')
console.log(wordSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');
console.log(ordersSet.size);
for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', "Manager", 'Chef', 'Waiter'];
const staffUnique = new Set([...staff]);
const staffUniqueArray = [...staffUnique];
console.log(staffUniqueArray);

const staffUniqueEasier = new Set(staff);
const staffUniqueEasierArray = [...staffUniqueEasier];
console.log(staffUniqueEasierArray);
// How many different letters are there in a word?
const numberOfLetters = new Set('amalgamation').size;
console.log(numberOfLetters);
console.log('amalgamation'.length);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal').set('open', 12).set('close', 22).set(true, 'We are open').set(false, 'We are closed');
console.log(rest.get('name'))
let timeNow = 11;
console.log(rest.get(timeNow >= rest.get('open') && timeNow < rest.get('close')));
rest.delete(2);
console.log(rest.size);

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
const question = new Map([
  ['question', 'What language are we learning?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
]);
