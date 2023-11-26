const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let avg = 0;
let cnt = 0;

for (let i = 1; i < input.length; i += 2) {
    sum += input[i];
    cnt++;
}

console.log(sum, (sum / cnt).toFixed(1));