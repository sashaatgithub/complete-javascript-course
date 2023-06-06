'use strict';

// OOP in JS : each object has a prototype. Each object has method
// Prototypal inheritance: instances inherit sprperties from "classes" (prototypes). Behaviour is delegated to the prototype

// 1 - Constructor functions - Arrays
// ES6 classes are just a layer of abstraction over constructor functions
// Constructor function needs a this, so it should be a function expression

const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
// new -> empty object is created 2) this is linked to the empty object
// 3) this is linked to the prototype 4)automatically returns the object which doesn't have to be empty

const jonas = new Person('Jonas', 1991);
const jack = new Person('Jack', 1975);
// Constructor functions simulate classes
console.log(jonas instanceof Person);

// never create a method inside a constructor function. Functions should be reused, not instantiated.

// Constructor function is a pattern, not a JS language features
// Every function has a prototype property, the prototype function too. And we can add methods to it.

Person.prototype.calcAge = function () {
  return Date.now() - Date.UTC(1988, 9, 9, 0, 0, 0, 0);
};

console.log(jack.calcAge());

// Person.prototype is not the prototype of Person, but for all the instances
// We can set a property on a prototype, but it won't be 'own' property

console.log(jonas.__proto__);

console.log(jonas.__proto__.__proto__);

console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
const arr = [1, 2]
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
}

// don't get used to adding methods to built-in objects, it leads to bugs in projects
// The prototype of element is Node

// class declaration
class PersonCl {
  // the method needs to be called constructor
  constructor(firstName, birthYear) {
    this.firstName = String(firstName).toUpperCase;
    this.birthYear = birthYear;
    this.becomesAdultIn = Number(birthYear) + 18;
  }
  // this is syntactic sugar on top of creating functions in a prototypes 
  calcAge() {
    return 2023 - this.birthYear;
  }
}

const katja = new PersonCl("Katja", 2018);
console.log(katja.becomesAdultIn, katja.birthYear, katja.calcAge());


// All the methods written outside the constructor, they become methods of the object prototype
// class expression
// PersonCl = class {
// }
// behind the scenes classes are still functions in JS

// _ in front of a variable name shows the team that a property shoulldn't be touched outside the class
// JavaScript is moving away from functions towards OOP. There is a proposal for 'class fields'