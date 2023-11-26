const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

let idx = 0;

for (let el of input) {
    if (el === 0) {
        break;
    }

    idx++;
}

let str = '';
for (let i = idx - 1; i >= 0; i--) {
    str += input[i] + ' ';
}

console.log(str);