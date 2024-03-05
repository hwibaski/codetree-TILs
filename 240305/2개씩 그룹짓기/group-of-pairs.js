const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input.split('\n')[0]);
const nums = input.split('\n')[1].split(' ').map(Number);

const sorted = nums.sort((a, b) => a - b);

let max = 0;
for (let i = 0; i < n; i++) {
    const groupSum = sorted[i] + sorted[2 * n - 1 - i];
    if (groupSum > max) {
        max = groupSum;
    }
}

console.log(max);