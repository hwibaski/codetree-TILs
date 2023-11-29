const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let zeroIdx = 0;
for (const el of input) {
    if (el === 0) break;
    zeroIdx++;
}

const countArr = Array(11).fill(0);

for (let i = 0; i < zeroIdx; i++) {
    const tensNum = parseInt(input[i] / 10);
    if (tensNum < 1) continue;
    countArr[tensNum]++;
}

for (let i = 1; i <= 9; i++) {
    console.log(`${i} - ${countArr[i]}`);
}