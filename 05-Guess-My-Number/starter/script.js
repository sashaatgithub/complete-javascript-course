let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', again);
document.querySelector('.reset').addEventListener('click', resetHighscore);

function checkNumber() {
    const input = document.querySelector('.guess').value;
    const secretNumber = document.querySelector('.number').textContent;
    let output = document.querySelector('.message');
    if (!input) {
        output.textContent = "You need to enter a number!"
    } else if (Number(input) === Number(secretNumber)) {
        output.textContent = 'Correct Number! ✨';
        updateHighscore();
    } else {
        updateScore();
        if (Number(input) < Number(secretNumber)) {
            output.textContent = 'Too low.😢 Try again!';
        } else {
            output.textContent = 'Too high.😢 Try again!';
        }
    }
}

function updateScore() {
    document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
}

function updateHighscore() {
    let score = document.querySelector('.score').textContent;
    let highscore = document.querySelector('.highscore').textContent;
    if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
    }
}

function resetHighscore() {
    document.querySelector('.highscore').textContent = 0;
}

function again() {
    number = generateNumber1To20();
    document.querySelector('.number').textContent = number;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
}

function generateNumber1To20() {
    return Math.trunc(Math.random() * 20) + 1;
}

