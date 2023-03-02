'use strict';
let hasDriversLicense = false;
/*const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Drive")

const interface = 'Audio';


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}
    `;
}

const describeFinland = describeCountry('Finland', '6000000', 'Helsinki');
const describeBulgaria = describeCountry('Bulgaria', 6800000, 'Sofia');
const describeRussia = describeCountry('Russia', 143000000, 'Moscow')
console.log(describeFinland, describeBulgaria, describeRussia);

const birthYear = 1991
const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const calcAge2 = birthYear => new Date().getFullYear() - birthYear;

const yearsUntilRetirement = birthYear => 65 - (new Date().getFullYear() - birthYear);

console.log(yearsUntilRetirement(birthYear));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}


const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const calcYearsToRetirement = function (birthYear, firstName) {
    try {
        if (typeof (firstName) !== String || typeof (birthYear) !== Number) {
            throw 'Input format is not correct';
        } else {
            const yearsToRetirement = 65 - calcAge(birthYear);
            if (yearsToRetirement >= 0) {
                console.log(`${firstName} retires in ${yearsToRetirement} years`);
                return yearsToRetirement;
            } else {
                console.log(`${firstName} has already retired`);
            }
        }
    } catch (err) {
        prompt("Error: " + err + ".")
    }
}

calcYearsToRetirement('Sasha', 1988);


function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const bulgarianPopulation = 6.8;
const russianPopulation = 143;
const indianPopulation = 1380;

const bulgariaAsWorldPercentage = percentageOfWorld1(bulgarianPopulation);
const russiaAsWorldPercentage = percentageOfWorld1(russianPopulation);
const indiaAsWorldPercentage = percentageOfWorld1(indianPopulation);

console.log(bulgariaAsWorldPercentage, russiaAsWorldPercentage, indiaAsWorldPercentage)

const percentageOfWorld2 = population => population / 7900 * 100;

console.log(percentageOfWorld2(bulgarianPopulation),
    percentageOfWorld2(russianPopulation),
    percentageOfWorld2(indianPopulation));
    

const years = new Array(1992, 1984, 2008)
console.log(friends[0], friends[2], friends.length)
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, friends]
console.log(jonas);
*/
const friends = ['Michael', 'Steven', 'Steven', 'Peter', 'Peter']
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// console.log

// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1])
// ]
// console.log(ages)

// friends.push("Jay", "Jeo");
// console.log(friends);
// friends.unshift('John')
// friends.pop();
// console.log(friends)
// friends.shift(friends);
console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Steven'))
while (friends.includes('Peter')) {
    delete friends[friends.indexOf('Peter')]
}
console.log(friends);


while (friends.includes('Steven')) {
    friends.splice(friends.indexOf('Steven'), friends.indexOf('Steven'));
}
console.log(friends);