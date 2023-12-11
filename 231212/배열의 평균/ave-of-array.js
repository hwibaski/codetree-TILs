const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.map(line => line.split(' ').map(Number));

// 가로
let res = '';

for (const line of arr) {
    const sum = line.reduce((prev, cur) => prev + cur, 0);
    const avg = (sum / line.length).toFixed(1);

    res += avg + ' ';
}

console.log(res);

// 세로
let res2 = ''

for (let i = 0; i < 4; i++) {
    const sum = arr[0][i] + arr[1][i];
    const avg = (sum / 2).toFixed(1);

    res2 += avg + ' '
}

console.log(res2);

const allSum = arr.reduce((prev, curLine) => prev + curLine.reduce((prev, cur) => prev + cur, 0), 0);
console.log((allSum / 8).toFixed(1));