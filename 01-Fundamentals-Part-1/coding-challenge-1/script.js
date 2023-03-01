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

marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;

let marksBMI = bmi(marksMass, marksHeight);
let johnsBMI = bmi(johnsMass, johnsHeight);

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher that John's BMI(${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})`);
}


