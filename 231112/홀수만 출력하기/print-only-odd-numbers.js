const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n').map(el => Number(el));

let res = '';
for (const el of input) {
    if (el % 2 === 1 && el % 3 === 0) {
        res += (el + ' \n');
    }
}

console.log(res);