'use strict';

// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // This always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
}
const james = new StudentCl("James Student", 2002, "IT");
james.calcAge();
// If we needn't new properties, we don't need a constructor function in the child class;

class BabyCl extends PersonCl { };
const marta = new BabyCl("Marta Mingo", 2021);
marta.calcAge();


