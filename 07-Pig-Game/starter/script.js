'use strict';
let initialScore = 0;
let initialActivePlayerId = 0;

let playerEls = document.querySelectorAll('.player');
let score0el = document.querySelector('.player--0 > .score');
let score1el = document.querySelector('.player--1 > .score');
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');

score0el.textContent = initialScore;
score1el.textContent = initialScore;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', rollTheDice);

function getActivePlayerNumber() {
  for (let i = 0; i < playerEls.length; i++) {
    if (playerEls[i].classList.contains('player--active')) {
      return i;
    }
  }
  return -1;
}
function rollTheDice() {
  let randomScore = generateRandomOneToSix();
  let dicePicName = `dice-${randomScore}.png`;
  diceEl.src = dicePicName;
  diceEl.classList.remove('hidden');
  if (randomScore === 1) {
    setAnotherPlayerActive();
  } else {
    addToActivePlayerScore(randomScore);
  }

  function generateRandomOneToSix() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  function addToActivePlayerScore(randomScore) {
    let activePlayerNumber = getActivePlayerNumber(playerEls);
    let currentActivePlayerScoreID = `current--${activePlayerNumber}`;
    let oldActivePlayerScore = Number(
      document.querySelector(`#${currentActivePlayerScoreID}`).textContent
    );
    document.querySelector(`#${currentActivePlayerScoreID}`).textContent =
      oldActivePlayerScore + randomScore;
  }
}

/*valid for two players only*/
function setAnotherPlayerActive() {
  let activePlayerNumber = getActivePlayerNumber();
  console.log(activePlayerNumber);
  document
    .querySelector(`.player--${activePlayerNumber}`)
    .classList.remove('player--active');
  let numberOfPlayerToActivate;
  activePlayerNumber === 0
    ? (numberOfPlayerToActivate = 1)
    : (numberOfPlayerToActivate = 0);
  let playerToActivateClass = `player--${numberOfPlayerToActivate}`;
  document
    .querySelector(`.${playerToActivateClass}`)
    .classList.add('player--active');
}

// const score0 = document.querySelector('#score--0');
// const score1 = document.getElementById('score--1');
