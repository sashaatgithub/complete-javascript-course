let marksMass;
let johnsMass;
let marksHeight;
let johnsHeight;
let mass;
let height;

mass = marksMass;
height = marksHeight;

function bmi(mass, height) {
    const bmi = mass / height ** 2;
    return bmi;
}
let marksBMI = bmi(marksMass, marksHeight);
let johnsBMI = bmi(johnsMass, johnsHeight);

function markHigherBMI(marksBMI, otherBMI) {
    if (marksBMI > otherBMI) {
        return true;
    } else return false;
}

marksMass = 78;
marksHeight = 1.69;
johnsMass = 92;
johnsHeight = 1.95;

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