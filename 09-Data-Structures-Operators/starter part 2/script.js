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

  orderPizza: function (mainIngredient, ...optionalIngredients) {
    let messageCore = `Here is your delicious pizza with ${mainIngredient} as a main ingredient. `;
    if (optionalIngredients.length > 0) {
      let messageOptional = `You have also selected the following ${
        optionalIngredients.length > 1 ? 'toppings' : 'topping'
      }: `;
      if (optionalIngredients.length > 1) {
        for (let i = 0; i < optionalIngredients.length - 1; i++) {
          messageOptional += `${optionalIngredients[i]}, `;
        }
      }
      messageOptional += `${
        optionalIngredients[optionalIngredients.length - 1]
      }.`;
      return messageCore + messageOptional;
    }
    return messageCore;
  },
};
console.log(restaurant.orderPizza('mud', 'frogs', 'flies'));
console.log(restaurant.orderPizza('mud'));

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 10;

console.log(
  restaurant.orderPizza &&
    restaurant.orderPizza('mushrooms', 'spinach', 'garlic')
);
