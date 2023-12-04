const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
const INT_MIN = Number.MIN_SAFE_INTEGER;

let minVal = INT_MAX;
let maxVal = INT_MIN;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 999 || arr[i] === -999) {
        break;
    }

    minVal = Math.min(minVal, arr[i]);
    maxVal = Math.max(maxVal, arr[i]);
}

console.log(maxVal, minVal);