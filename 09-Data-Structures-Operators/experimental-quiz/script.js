'use strict';

const question = new Map([
  ['question', 'What language are we learning? You have only one guess'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct✔'],
  [false, 'Incorrect😕'],
  ['questionElement', document.querySelector('h1')],
  ['answerElement', document.querySelector('#inputAnswer')],
  ['hintText', document.querySelector('.hint-text')],
  ['btnHint', document.querySelector('.btn-hint')],
  ['msgText', document.querySelector('.msg-text')]
]);
console.log(question);
let hintText = '';
for (const [key, value] of question) {
  if (typeof key === 'number') {
    hintText = hintText + `Answer ${key}: ${value}`;
    if (key !== 3) {
      // TODO: Understand why different answers don't appear on different lines.
      hintText = hintText + '\n';
    }
  }
}
(question.get('hintText')).textContent = hintText;

(question.get('questionElement')).textContent = question.get('question');
(question.get('btnHint')).addEventListener('click', toggleHint)

function toggleHint() {
  (question.get('hintText')).classList.toggle('hidden');
}

(question.get('msgText')).textContent = (question.get('answerElement')).textContent === question.get(question.get('correct'));
(question.get('answerElement')).textContent === question.get(question.get('correct'));

// const answer = Number(prompt('Enter your answer here.'))

// console.log(question.get(answer === question.get('correct')));

console.log(question);
