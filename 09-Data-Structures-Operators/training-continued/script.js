'use strict';

const question = new Map([
  ['question', 'What language are we learning? You have only one guess'],
  [1, 'C '],
  [2, 'Java '],
  [3, 'JavaScript '],
  ['correct', 3],
  [true, 'Correct✔'],
  [false, 'Incorrect😕'],
  ['questionElement', document.querySelector('h1')],
  ['hintText', document.querySelector('.hint-text')],
  ['msgText', document.querySelector('.msg-text')],
]);
console.log(question);

// let hintText = 'abc';
let hintText = '';
for (const [key, value] of question) {
  if (typeof key === 'number') {
    hintText = hintText + `Answer ${key}: ${value}`;
  }
}

const answer = Number(
  prompt(
    'What language are we learning? Enter the number of the correct answer here. ' +
      hintText
  )
);

question.get('msgText').textContent = question.get(
  answer === question.get('correct')
);

console.log(question.get(answer === question.get('correct')));
