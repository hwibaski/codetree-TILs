const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const cntArr = Array(11).fill(0);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;
    if (input[i] < 10) continue;

    const tensNums = parseInt(input[i] / 10);
    cntArr[tensNums]++;
}

for (let i = 10; i >= 1; i--) {
    console.log(`${i * 10} - ${cntArr[i]}`);
}