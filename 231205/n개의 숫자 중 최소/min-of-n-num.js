const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
let minVal = INT_MAX;

for (const el of arr) {
    minVal = Math.min(minVal, el);
}

console.log(minVal, arr.filter(el => el === minVal).length);