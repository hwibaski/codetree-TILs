const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let cnt = 0;

for (const el of input) {
    if (el === 0) {
        break;       
    }

    if (el % 2 === 0) {
        cnt++;
        sum += el;
    }
}

console.log(cnt, sum);