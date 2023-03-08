const initialScore = 10;
let secretNumber;
secretNumber = again();
score = document.querySelector('.score').textContent;
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', again);
document.querySelector('.reset').addEventListener('click', resetHighscore);

function resetScore() {
    document.querySelector('.score').textContent = initialScore;
    return initialScore;
}

function getScore() {
    return document.querySelector('.score').textContent;
}
function checkNumber() {
    const input = document.querySelector('.guess').value;
    let output = document.querySelector('.message');
    let secret = document.querySelector('.number');
    if (Number(secret.textContent) === secretNumber) {
        output.textContent = "You have already won. Press 'again' to restart the game!"
    } else if (!input) {
        output.textContent = "You need to enter a number!"
    } else if (Number(input) === secretNumber) {
        output.textContent = 'Correct Number! ✨';
        updateHighscore();
        document.querySelector('body').style.backgroundColor = '#60b347';
        secret.style.fontSize = '30 rem'
        secret.textContent = secretNumber;
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
    secretNumber = generateNumber1To20();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = resetScore();
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.fontSize = '15 rem';
    return secretNumber;
}

function generateNumber1To20() {
    return Math.trunc(Math.random() * 20) + 1;
}

