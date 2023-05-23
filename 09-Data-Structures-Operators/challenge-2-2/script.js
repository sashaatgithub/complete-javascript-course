"use strict";

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ], [
      "Burki",
      "Schultz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ]
  ], score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [numberMinus1, name] of game.scored.entries()) { console.log(`Goal ${numberMinus1 + 1}: ${name}`) }

let sum = 0;
let numberOfOdds = 0
for (const odd of Object.values(game.odds)) {
  sum = odd + sum;
  numberOfOdds = numberOfOdds + 1;
} console.log(`The average odds are ${sum / numberOfOdds}`)

let whoseOdds = [];
let odds = [];
for (const [whoseOdd, odd] of Object.entries(game.odds)) {
  whoseOdds = [...whoseOdds, whoseOdd];
  odds = [...odds, odd];
  console.log(whoseOdd);
  console.log(odd);
}

const teamNames = {}
for (const whoseOdd of whoseOdds) {
  teamNames[whoseOdd] ??= game[whoseOdd] ?? 'draw';
}
console.log(teamNames);

whoseOdds.forEach((whoseOdd, index) => {
  let teamName = game[whoseOdd] ?? 'draw';
  let odd = odds[index];
  let victoryOf = `victory of ${teamName}`;
  let scenarioName = `${teamName === "draw" ? "draw" : `${victoryOf}`}`
  console.log(`Odd of ${scenarioName} is ${odd}`);
})
