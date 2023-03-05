mark = {
    firstName: "Mark",
    lastName: "Miller",
    getFullName: function () {
        const fullName = `${this.firstName} ${this.lastName}`;
        this.fullName = fullName;
        return fullName;
    },
    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        this.bmi = bmi;
        return bmi;
    },
    mass: 78,
    height: 1.69
}

john = {
    firstName: "John",
    lastName: "Smith",
    getFullName: function () {
        const fullName = `${this.firstName} ${this.lastName}`;
        this.fullName = fullName;
        return fullName;
    },
    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        this.bmi = bmi;
        return bmi;
    },
    mass: 92,
    height: 1.95
}

// It doesn't work like that. No idea why.
// function getFullName(object) {
//     const fullName = `${object.firstName} ${object.lastName}`
//     object.fullName = fullName;
//     return fullName;
// }

function compareBMIs(person1, person2) {
    if (person1.bmi === person2.bmi) { return 'BMIs are the same' }
    else {
        const result = person1.bmi > person2.bmi ?
            `${person1.firstName}'s BMI (${person1.bmi}) is higher than ${person2.firstName}'s (${person2.bmi})` :
            `${person2.firstName}'s BMI (${person2.bmi}) is higher than ${person1.firstName}'s (${person1.bmi})`;

        return result;
    }
}

console.log(mark.getFullName());
console.log(john.getFullName());
console.log(mark);
console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(compareBMIs(mark, john));
