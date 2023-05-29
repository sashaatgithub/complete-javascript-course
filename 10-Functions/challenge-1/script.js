'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

document.querySelector('.poll').addEventListener('click', registerNewAnswer);
document.querySelector('.show').addEventListener('click', toggleResults);

function registerNewAnswer() {
  debugger;
  let optionsStr = '';
  let newAnswer = '';
  const options = poll.options;
  options.forEach(element => {
    optionsStr = optionsStr + element + '\n';
  });
  let promptText = `${poll.question}\n ${optionsStr}\n (Write valid option number)`;
  while (true) {
    newAnswer = Number(prompt(promptText));
    if (newAnswer >= 0 && newAnswer < options.length) {
      poll.answers[newAnswer] = poll.answers.at(newAnswer) + 1;
      break;
    }
    if (promptText.startsWith(poll.question)) {
      promptText =
        'You have entered an invalid answer. Please try again! \n' + promptText;
    }
  }
  createResultsDisplay();
  toggleResults();
}

function createResultsDisplay() {
  let answersElement = document.querySelector('.answers');
  const answers = poll.answers;
  console.log(answers);
  const options = poll.options;
  let answersStr = '';
  for (let i = 0; i < options.length; i++) {
    answersStr = `${answersStr} ${options[i]} - ${answers[i]} replies`;
    if (i < options.length - 1) {
      answersStr = answersStr + '; ';
    }
  }
  answersElement.innerHTML = answersStr;
}

function toggleResults() {
  createResultsDisplay();
  document.querySelector('.answers').classList.toggle('hidden');
}

// Immediately invoked functions - a pattern. It is important for hiding variables. Was very useful before the invention of const and let
(function () {
  console.log('this will never run again');
})();

(() => {
  console.log('this neither');
})();
