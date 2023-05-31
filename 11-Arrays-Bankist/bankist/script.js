'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;
let isSorted = false;

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

function shouldHaveAccess(username, pin){
return accounts.find(acc => acc?.username === username)?.pin === pin;
}
function getAccount(username){
  return accounts.find(acc => acc?.username === username);
  }

function showUI(){
containerApp.style.opacity = 100;
  }

function sortAsc(movements){
  // ascending sort to achieve display in descending order because display is reversed from top to bottom
  const movementsCopy = movements.slice();
  return movementsCopy.sort((a,b) => a-b);
}

const displayMovements = function (movements, sort = false) {
  const movs = sort ? sortAsc(movements) : movements;
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    let inOrOut;
    inOrOut = mov < 0 ? 'withdrawal' : 'deposit';
    let divText = `<div class="movements__row">
  <div class="movements__type movements__type--${inOrOut}"> ${
      i + 1
    } ${inOrOut.toUpperCase()}</div>
  <div class="movements__value">${mov}</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', divText);
  });
};

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
})


function calculateBalance(account){
  const movements = account.movements;
  const balance = movements.reduce((acc,curr) => acc+curr,0);
  labelBalance.textContent = balance;
  account.balance = balance;
}

function calculateAllDeposits(movements){
  const deposits = movements
  .filter((curr,i,arr) => curr > 0)
  .reduce((acc, curr)=>acc+curr,0);
  labelSumIn.textContent = `${deposits}€`;
}


function calculateAllWithdrawals(movements){
  const withdrawals = movements
  .filter((curr,i,arr) => curr < 0)
  .reduce((acc, curr)=>acc+curr,0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;
}

btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  giveAccessToAccount();
});

function updateData(account){
  displayMovements(account.movements);
  calculateBalance(account);
  calculateAllDeposits(account.movements);
  calculateAllWithdrawals(account.movements);
}

function giveAccessToAccount(){
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  if(shouldHaveAccess(username, pin)){
    currentAccount = getAccount(username);
    updateData(currentAccount);
    showUI();
  }
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (movement) {
  return movement * eurToUsd;
});
// cleaner version below
const movementsUSDArrow = movements.map(movement => movement * eurToUsd);
console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

// forEach method has a side effect, and map method doesn't

const user1 = 'Alexandra Velikova';

createUsernames(accounts);
console.log(accounts);

function deposits(movements) {
  return movements.filter(movement => movement > 0);
}
console.log(deposits(accounts[2].movements));
const max = movements.reduceRight((acc, mov) => {if (acc>mov) {return acc} else {return mov}}, movements[0]);

// Filter returns an array and find returns only one element
const firstWithdrawal = movements.find(mov => mov<0);
console.log(firstWithdrawal);
const jessicasAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(jessicasAccount);
// return<0, A, B
// return > 0, B, A
// To sort in the ascending order, we need to return something greater than zero if A is bigger thab B
// ascending order. Array is mutated
const movementsMutated = [...movements];
movementsMutated.sort((a,b) => a-b);
console.log(movementsMutated);
console.log(movements);

// descending order. Array is mutated
movementsMutated.sort((a,b)=> b-a)
console.log(movementsMutated);
console.log(movements);
// Return 0 - position remains the same

