"use strict";
const players1 = [
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
];

const players2 = [
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
];

// const [gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, "Thiago", "Coutinnho", "Perisic"];
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

let scorers = {};

// instead of creating two arrays, just give the object properties dynamically.
let gameScorers = game.scored;
for (let i = 0; i < gameScorers.length; i++) {
  if (!scorers?.[gameScorers[i]]) {
    scorers[gameScorers[i]] = 1
  } else {
    scorers[gameScorers[i]]++;
  }
}
console.log(scorers);

// let {
//   team1,
//   odds: { team1: team1Odds },
// } = game;

// let team1Info = [team1, team1Odds];

// let {
//   team2,
//   odds: { team2: team2Odds },
// } = game;

// let team2Info = [team2, team2Odds];

// let infos = [team1Info, team2Info];
// for (let [teamName, odd] of infos) {
//   console.log(`Odd of victory of ${teamName} is ${odd}`);
// }

// console.log(`Odd of draw is ${game?.odds?.x ?? "unknown"}`);
// ({
//   odds: { team1 },
// } = game);

// let {
//   odds: { x: draw },
// } = game;

// ({
//   odds: { team2 },
// } = game);

// console.log(team1, draw, team2);

// console.log(
//   (team1 > team2 && "team 1") ||
//     (team2 > team1 && "team 2") ||
//     (team1 === team2 && "draw")
// );

// function printGoals(...playerNames) {
//   return `${playerNames.length} goals were scored by ${playerNames}`;
// }
// console.log(
//   printGoals("Lewandowski','Davies", "Muller", "Lewandowski", "Kimmich")
// );

// console.log(game.scored.entries());
// for (let [numb, playerName] of game?.scored.entries()) {
//   console.log(`Goal ${Number(numb) + 1}: ${playerName}`);
// }
console.log('kjh');
