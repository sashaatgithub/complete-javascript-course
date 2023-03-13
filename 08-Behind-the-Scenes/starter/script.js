'use strict';

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
console.log(calcAge(1991));
*/
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(this);
//   console.log(2037 - birthYear);
// };

// calcAgeArrow(1991);

// const sasha = {
//   birthYear: 1988,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.calcAge;
//   },
// };
// console.log(sasha.calcAge());
// console.log(sasha.calcAge);

// const mathilda = {
//   birthYear: 2017,
// };

// mathilda.calcAge = sasha.calcAge;
// console.log(mathilda.calcAge());

// const addExpr = function () {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// };
// console.log(addExpr(7, 8, 5));

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(me, friend);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = {
  firstName: jessica.firstName,
  lastName: jessica.lastName,
  age: jessica.age,
};

marriedJessica.lastName = 'Davis';

console.log(jessica, marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Kingston';
console.log(jessicaCopy);
