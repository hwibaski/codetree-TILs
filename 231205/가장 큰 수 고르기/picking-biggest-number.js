const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const INT_MIN = Number.MIN_SAFE_INTEGER;

let minVal = INT_MIN;

for (const el of input) {
    minVal = Math.max(minVal, el);
}

console.log(minVal);