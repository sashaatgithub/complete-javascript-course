// Exporting module
console.log('Exporting module');
const shippingCost = 10;
const cart = new Map();
let totalPrice = 0;
let totalQuantity = 0;

// named exports just have 'export' in the beginning
/**
 *
 * @param {String} product  - is for the name of the countable product, in plural, if more than one, or in singular, if one, if quantity is more than one
 * @param {Number} unitPrice - the price of each unit of the product;
 * @param {Number} quantity - the number of units of the countable product added
 */

// export always needs to happen in top level code, not in code blocks
export const addToCart = function (product, unitPrice, quantity) {
  const oldQuantity = cart.get(product);
  let currentQuantity = oldQuantity + quantity;
  cart.set(product, currentQuantity);
  const oldTotalPrice = totalPrice;
  totalPrice += quantity * unitPrice;
  const oldTotalQuantity = totalQuantity;
  totalQuantity += quantity;
  console.log(`${quantity} ${product} added to cart. 
  Price of each unit is ${unitPrice}.
  The total number of items in the card changed from ${oldTotalQuantity} to ${totalQuantity}.
  The total price of the items in the shopping card changed from ${oldTotalPrice} to ${totalPrice}`);
};

export { totalPrice, totalQuantity };

export default shippingCost;
