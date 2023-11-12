const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

let res = '';
let i = a;

while (i <= b) {
    res += (i + ' ');

    if (i % 2 === 0) {
        i += 3;
    } else if (i % 2 === 1) {
        i *= 2;
    }
}

console.log(res);