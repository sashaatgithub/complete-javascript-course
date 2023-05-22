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

// const { players } = game;
// console.log(players);
// const [players11, players12] = players;
// console.log(players11);

//Hurray for the below
const { players: [players1, players2] } = game;
console.log(players1);
const [gk, ...fieldPlayers] = players1;
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(draw);

function printGoals(...names) {
  console.log(...names, names.length);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

console.log(team1);

for (const player of players1) console.log(player);
for (const [i, element] of players1.entries()) console.log(i);

