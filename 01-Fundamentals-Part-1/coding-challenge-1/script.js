let marksMass;
let johnsMass;
let marksHeight;
let johnsHeight;
let mass;
let height;

function bmi(mass, height) {
    let bmi = mass / height ** 2;
    return bmi;
}

function markHigherBMI(marksBMI, otherBMI) {
    if (marksBMI > otherBMI) {
        return true;
    } else return false;
}

marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;

let marksBMI = bmi(marksMass, marksHeight);
let johnsBMI = bmi(johnsMass, johnsHeight);

console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI(marksBMI, johnsBMI));


// function logger() {
//     console.log('My name is Jonas');
// }
// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// };

// fruitProcessor(5, 0)