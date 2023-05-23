'use strict';
let initialScore = 0;
let initialActivePlayerId = 0;

let score0el = document.querySelector('.player--0 > .score');
let score1el = document.querySelector('.player--1 > .score');

// let currentScore0El = document.getElementById('current--0');
// let currentScore1El = document.getElementById('current--1');

let activePlayer = {
  number: 0,
  currentScoreEl: document.getElementById(`current--${this.number}`),
  totalScoreEl: document.getElementById(`score--${this.number}`),
};
let playing = true;

let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');

score0el.textContent = initialScore;
score1el.textContent = initialScore;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', rollTheDice);
btnHold.addEventListener('click', keepScore);

function rollTheDice() {
  if (playing) {
    let randomScore = generateRandomOneToSix();
    let dicePicName = `dice-${randomScore}.png`;
    diceEl.src = dicePicName;
    diceEl.classList.remove('hidden');
    let currentScoreEl = document.getElementById(
      `current--${getActivePlayerNumber()}`
    );
    if (randomScore === 1) {
      currentScoreEl.textContent = 0;
      setAnotherPlayerActive();
    } else {
      addToScore(randomScore, currentScoreEl);
    }
  }
}

function keepScore() {
  if (playing) {
    let activePlayerNumber = getActivePlayerNumber();
    let activePlayerCurrentScoreEl = document.getElementById(
      `current--${activePlayerNumber}`
    );
    let scoreToAdd = Number(activePlayerCurrentScoreEl.textContent);
    activePlayerCurrentScoreEl.textContent = 0;
    let activePlayerTotalScoreEl = document.querySelector(
      `#score--${getActivePlayerNumber()}`
    );
    addToScore(scoreToAdd, activePlayerTotalScoreEl);
    setAnotherPlayerActive();
  }
}

function generateRandomOneToSix() {
  return Math.trunc(Math.random() * 6) + 1;
}

function getActivePlayerNumber() {
  const playerEls = document.querySelectorAll('.player');
  for (let i = 0; i < playerEls.length; i++) {
    if (playerEls[i].classList.contains('player--active')) {
      return i;
    }
  }
  return -1;
}

function addToScore(scoreToAdd, scoreEl) {
  let oldScore = Number(scoreEl.textContent);
  scoreEl.textContent = oldScore + scoreToAdd;
}

/*valid for two players only*/
function setAnotherPlayerActive() {
  let activePlayerNumber = getActivePlayerNumber();
  console.log(activePlayerNumber);
  document
    .querySelector(`.player--${activePlayerNumber}`)
    .classList.toggle('player--active');
  let numberOfPlayerToActivate;
  activePlayerNumber === 0
    ? (numberOfPlayerToActivate = 1)
    : (numberOfPlayerToActivate = 0);
  let playerToActivateClass = `player--${numberOfPlayerToActivate}`;
  document
    .querySelector(`.${playerToActivateClass}`)
    .classList.toggle('player--active');
}

// const score0 = document.querySelector('#score--0');
// const score1 = document.getElementById('score--1');
