// Importing module
// these are named exports
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// this is a named exports
// import * as ShoppingCart from './shoppingCart.js';
/*
console.log('Importing module');
ShoppingCart.addToCart('apples', 1, 5);
ShoppingCart.addToCart('oranges', 1.5, 3);
console.log(`The total number of items in the cart is ${totalQuantity}.`);
// A module exports a public API;
*/
/*
// Here any name can be used
import cost from './shoppingCart.js';
console.log(cost);
console.log(cart);
*/
// But this actually blocks the execution of the entire module! If we have await inside the async function, it only blocks the function.
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

(async function getLastPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const [postWithBiggestId] = data.slice(-1);
  //the above is the same as data.at(-1)
  console.log(await postWithBiggestId);
  return postWithBiggestId;
})();
// Also works
// const postWithBiggestId = await getLastPost();
// console.log(postWithBiggestId);
