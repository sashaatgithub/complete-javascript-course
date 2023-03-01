'use strict';
let hasDriversLicense = false;
/*const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Drive")

const interface = 'Audio';
*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}
    `;
}

const describeFinland = describeCountry('Finland', '6000000', 'Helsinki');
const describeBulgaria = describeCountry('Bulgaria', 6800000, 'Sofia');
const describeRussia = describeCountry('Russia', 143000000, 'Moscow')
console.log(describeFinland, describeBulgaria, describeRussia);

