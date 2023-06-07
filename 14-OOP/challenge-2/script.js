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
}

const ford = new CarCl('Ford', 120);


console.log(ford.speedMpH());
ford.accelerate();
console.log(ford.speedMpH());
ford.brake();
console.log(ford.speedMpH());
console.log(ford.make);
const fusion = new CarCl('Scoda', 199);
console.log(fusion);
console.log(fusion.make);









