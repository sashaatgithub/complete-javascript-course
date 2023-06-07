'use strict'

class CarCl {

  constructor(make, speedKmh) {
    this.make = make;
    this.speedKmh = speedKmh;
  }

  // Different setters are used for actuallyt setting and changing names;
  set make(receivedName) {
    if (receivedName === ' ' || receivedName === '') { alert('Name cannot be empty') }
    else if (!receivedName.match(/[a-zA-Z]+$/)) { alert('Name must be in Latin letters') }
    else {
      this._make = receivedName;
    }
  }

  get make() { return this._make; }

  accelerate() {
    const newSpeed = this.speedKmh + 10;
    this.speedKmh = newSpeed;
    return this.speedKmh;
  }

  brake() {
    this.speedKmh = this.speedKmh - 5;
    return this.speedKmh;
  }

  speedMpH() {
    return this.speedKmh / 1.6;
  }

  // That's how to make a value unchangeable with getter and setter;
  get vehicleType() {
    return this._vehicleType;
  }

  // That's how to make a value unchangeable with getter and setter;
  set vehicleType(_) {
    this._vehicleType = 'car';
  }

}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.vehicleType = 'bike';
console.log(ford.vehicleType);


// if vehicleType were a simple method:
// ford.vehicleType = 'bike';
// console.log(ford);
// console.log(ford.vehicleType());
// // The below returns the code of the method
// // console.log(ford.vehicleType);
// // But one can simply do 
// ford.vehicleType = 'bike';
// // and hide the car property of the prototype
// console.log(ford);





console.log(ford.speedMpH());
ford.accelerate();
console.log(ford.speedMpH());
ford.brake();
console.log(ford.speedMpH());
console.log(ford.make);
const scoda = new CarCl('Scoda', 199);
console.log(scoda);
console.log(scoda.make);
scoda.make = 'Scoda GmbH';
console.log(scoda);

Object.defineProperty(scoda, 'name',
  {
    value: 'Scoda',
    writable: false
  });
// This is now not allowed due to lines 64-68
// scoda.name = 'Mercedes';


// Useless in my case
// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// }

// Object.defineProperty(Car, 'vehicleType', {
//   value: 'car',
//   writable: false,
//   configurable: false
// })

// const volvo = new Car('volvo', 100);
// // The below is not allowed due to Object.defineProperty
// // Car.vehicleType = 'bike';
// console.log(volvo);

// // The below returns undefined
// console.log(volvo.vehicleType);

// // The below is allowed and changes volvo's vehicle type
// // volvo.vehicleType = 'bike';
// // console.log(volvo.vehicleType);











