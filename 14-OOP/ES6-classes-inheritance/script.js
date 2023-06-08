'use strict';
/*
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

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // protected property, not really private
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${this.owner}`);

    function deposit(value){
      this._movements.push(value);
    }

    function withdrawal(value){
      this._movements.push(-value);
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdrawal(140);
*/

class Account {
  // public field (prototype)
  locale = navigator.language;
  #movements = [];
  // 2) Private field (instances)
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property, not really private
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // methods in a class don't need 'function' in front of them
  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdrawal(value) {
    this.#movements.push(-value);
  }
  // private method
  #approveLoan(val) {
    return `The loan ${val} is approved`;
  }
}
// We cannot define fields in a constructor

const acc1 = new Account('JS', 'EUR', 1111)
console.log(acc1);




