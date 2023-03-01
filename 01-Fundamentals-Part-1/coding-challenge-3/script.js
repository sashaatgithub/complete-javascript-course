function averageScore(scores) {
    const length = scores.length;
    const sum = scores.reduce((a, b) => a + b);
    if (length === 0) {
        return 0;
    } else {
        return sum / length;
    }
}

function whoWins(namesAndScores) {
    if (namesAndScores.get('Dolphins') > namesAndScores.get('Koalas') && namesAndScores.get('Dolphins') >= 100) {
        return 'Dolphins win'
    } else if (namesAndScores.get('Dolphins') < namesAndScores.get('Koalas') && namesAndScores.get('Koalas') >= 100) {
        return 'Koalas win'
    } else if (namesAndScores.get('Koalas') >= 100) {
        return 'It is a draw, both have high scores and win'
    } else { return 'Low score, no one wins'; }

}

const dolphinsScores = [97, 112, 101];
const dolphinsAvgScore = averageScore(dolphinsScores);
const koalasScores = [109, 95, 106];
const koalasAvgScore = averageScore(koalasScores);
const namesAndScores = new Map();
namesAndScores.set('Dolphins', dolphinsAvgScore);
namesAndScores.set('Koalas', koalasAvgScore);
console.log(whoWins(namesAndScores));
console.log(dolphinsAvgScore);
console.log(koalasAvgScore);