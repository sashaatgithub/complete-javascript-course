'use strict';

const question = new Map([
  ['question', 'What language are we learning?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct✔'],
  [false, 'Try again😕'],
  ['questionElement', document.querySelector('h1')],
  ['answerElement', document.querySelector('#inputAnswer')],
  ['hintText', document.querySelector('.hint')]
]);
console.log(question);

(question.get('questionElement')).textContent = question.get('question');


for (const [key, value] of question) {
  if (typeof key === 'number')
    console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Enter your answer here.'))

// console.log(question.get(answer === question.get('correct')));

console.log(question);
question.get('hintText').classList.add('hidden');