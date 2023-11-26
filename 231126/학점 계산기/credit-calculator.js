const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(el => Number(el));

const sum = scores.reduce((acc, cur) => acc + cur);
const avg = (sum / n).toFixed(1);

console.log(avg);
console.log(calGrade(avg));

function calGrade(avgScore) {
    if (avgScore >= 4) {
        return 'Perfect';
    }

    if (avgScore >= 3) {
        return 'Good';
    }

    return 'Poor';
}