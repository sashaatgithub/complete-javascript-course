'use strict';
const text = document.querySelector('textarea').value;
document.querySelector('button').addEventListener('click', conversion(text));

function conversion(text) {
  const lowerCaseText = text.toLowerCase().trim();
  const inputsArray = lowerCaseText.split('\n');
  for (let i = 0; i < inputsArray.length; i++) {
    let input = inputsArray[i];
    let capitalIndex = input.indexOf('_') + 1;
    let outputWithUnderscore =
      input.slice(0, capitalIndex) +
      input[capitalIndex].toUpperCase() +
      input.slice(capitalIndex + 1);
    console.log(
      outputWithUnderscore.replaceAll('_', '').trim() + '✔'.repeat(i + 1)
    );
  }
}
