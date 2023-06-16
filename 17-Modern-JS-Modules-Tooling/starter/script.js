import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import { addToCart } from './shoppingCart.js';

const state = {
  cart: [
    { product: 'loaves of bread', quantity: 5 },
    { product: 'pizzas', quantity: 5 },
  ],
  user: { loggedIn: true },
};

console.log(state);

const stateCloneAssign = Object.assign({}, state);
console.log(stateCloneAssign);

const stateCloneStructured = structuredClone(state);
console.log(stateCloneStructured);

// Even the initial console.logs before the change are mutated
stateCloneStructured.user.loggedIn = false;
console.log(stateCloneStructured);
Object.freeze(stateCloneStructured);

addToCart(state.cart[0].product, 4.5, 3);
