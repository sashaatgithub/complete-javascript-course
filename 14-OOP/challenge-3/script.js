'use strict'

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  return this.speed;
}

Car.prototype.brake = function () {
  const newSpeed = this.speed - 5;
  return this.speed;
}

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this.charge;
}

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();

