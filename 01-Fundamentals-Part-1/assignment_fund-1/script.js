
// console.log("I live in " + country + " in " + continent + " with population of " + population + " people");
// let javascriptIsFun = true;
// console.log("Our variable is javascriptIsFun. Its type changes:")
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof '23');

// javascriptIsFun = 'YES'
// console.log(typeof javascriptIsFun)
// let year;
// let age;
// console.log(typeof (age));
// age = 30;
// console.log(typeof (age));
// const birthYear = 1991;
// // birthYear = 1990; not allowed
// var job = 'accountant';
// job = 'programmer';


const currentYear = 2037;
const jonasesBirthYear = 1991;
const sarahsBirthYear = 2018;
const ageJonas = currentYear - jonasesBirthYear;
const ageSarah = currentYear - sarahsBirthYear;
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // 2**3 2 to the power of 3

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);
// let x = 10 + 5;
// console.log(x);
// x += 10;
// console.log(x);
// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x--;
// console.log(x);
// console.log(ageJonas > ageSarah);
// let isOfFullAge;
// isOfFullAge = ageSarah >= 18;
// if (isOfFullAge) {
//     console.log("Sarah is allowed to drive")
// } else {
//     console.log("Sarah is too young to drive");
// }
// console.log((currentYear - jonasesBirthYear) > (currentYear - sarahsBirthYear))

const country = "Bulgaria";
const continent = "Europe";
let population = 6800000;
const isIsland = false;
const language = 'Bulgarian';
console.log(isIsland, population, country, language);
console.log(population += 1000000);
population -= 1000000;
let finlandsPopulation = 6000000;
let averagePopulation = 33000000;
let description = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
let averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);




