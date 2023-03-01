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
*/

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