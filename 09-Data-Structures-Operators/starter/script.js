'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderDelivery: function ({
    time = new Date().toTimeString(),
    mainIndex,
    address,
  }) {
    console.log(
      `Order received. ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(19, 1, 20, 0, 15, 5));

const x = [23, 5, 7];
console.log(add(...x));
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const ingredients = [
//   prompt(`Let's make pasta! Please enter the first ingredient to add to it.`),
//   prompt(`Please enter the second ingredient`),
//   prompt(`Please enter the third ingredient`),
// ];
// restaurant.orderPasta(...ingredients);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Ristorante Roma';
// console.log(restaurant, restaurantCopy);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// let {
//   openingHours: { sat: saturdayOpeningHours },
//   ...otherProperties
// } = restaurant;
// console.log(saturdayOpeningHours);
// console.log(otherProperties);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const myOrder = {
//   mainIndex: 0,
//   address: 'Bulgaria blvd, 108',
//   comment: 'ASAP',
// };

// restaurant.orderDelivery(myOrder);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const arr = [7, 8, 9];
// const newArr = [7, 8, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// let miro = 'Miro';
// let papa = 'Papa';
// let mama = 'Mama';
// let groupName = [...mama, ...papa, ...miro];
// console.log(groupName);

// const arr1 = [17, 'Jonas', ['heyho', 'yuppee']];
// const [x, y, z] = arr1;
// console.log(x, y, z, arr1);
// let [origin, , foodType] = restaurant.categories;
// console.log(origin);
// console.log(foodType);

// [foodType, origin] = [origin, foodType];
// console.log(foodType);

// const [starterCourse, mainCourse] = restaurant.order(3, 1);
// console.log(starterCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [ji, jj]] = nested;
// console.log(ji);
// console.log(jj);

// const [p = 0, q = 0, r = 0] = [8, 9];
// console.log(r);

// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// const {
//   openingHours: {
//     fri: { open: fridayOpening },
//   },
// } = restaurant;
// console.log(fridayOpening);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
