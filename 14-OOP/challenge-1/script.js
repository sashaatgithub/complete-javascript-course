'use strict';
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  this.speed = newSpeed;
  console.log(newSpeed);
}

const bmw1 = new Car('BMW', 120);
bmw1.accelerate();

Car.prototype.brake = function () {
  const newSpeed = this.speed - 5;
  this.speed = newSpeed;
  console.log(newSpeed);
}
bmw1.brake();
bmw1.brake();
bmw1.brake();
bmw1.brake();
bmw1.brake();
bmw1.brake();
console.log(bmw1);