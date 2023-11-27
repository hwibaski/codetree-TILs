const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
        sumEven += input[i];
    } else {
        sumOdd += input[i];
    }
}

const res = Math.max(sumEven, sumOdd) - Math.min(sumEven, sumOdd);
console.log(res);