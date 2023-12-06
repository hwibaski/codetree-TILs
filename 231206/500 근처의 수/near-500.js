const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let maxVal = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] > 500) continue;

    if (input[i] > maxVal) maxVal = input[i];
}

let minVal = 1001;
for (let i = 0; i < input.length; i++) {
    if (input[i] < 500) continue;

    if (input[i] < minVal) minVal = input[i];
}

console.log(maxVal, minVal);