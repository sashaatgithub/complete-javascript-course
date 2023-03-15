'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
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
};

const entries = Object.entries(openingHours);
console.log(entries);

for (let [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
const restaurant = {
  ['na' + 'me']: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // orderPizza: function (mainIngredient, ...optionalIngredients) {
  //   let messageCore = `Here is your delicious pizza with ${mainIngredient} as a main ingredient. `;
  //   if (optionalIngredients.length > 0) {
  //     let messageOptional = `You have also selected the following ${
  //       optionalIngredients.length > 1 ? 'toppings' : 'topping'
  //     }: `;
  //     if (optionalIngredients.length > 1) {
  //       for (let i = 0; i < optionalIngredients.length - 1; i++) {
  //         messageOptional += `${optionalIngredients[i]}, `;
  //       }
  //     }
  //     messageOptional += `${
  //       optionalIngredients[optionalIngredients.length - 1]
  //     }.`;
  //     return messageCore + messageOptional;
  //   }
  //   return messageCore;
  // },
};
console.log(restaurant.orderPasta?.('rice', 'rice', 'rice'));
console.log(restaurant.orderJuice?.(0, 1) ?? 'Method does not exist');
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (let day of days) {
  console.log(`On ${day}, we open at ${openingHours?.[day]?.open ?? 'closed'}`);
}
console.log(restaurant);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant?.openingHours?.mon);

// console.log(restaurant.orderPizza('mud', 'frogs', 'flies'));
// console.log(restaurant.orderPizza('mud'));

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// console.log(
//   restaurant.orderPizza &&
//     restaurant.orderPizza('mushrooms', 'spinach', 'garlic')
// );

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Pigu',
// };

// console.log((rest2.owner &&= 'anonymous'));
const users = ['Me', 'You'];
console.log(users?.[2] ?? 'There is no such element');
