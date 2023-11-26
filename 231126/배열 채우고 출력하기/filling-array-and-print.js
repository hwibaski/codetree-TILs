const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let str = '';
for (let i = input.length - 1; i >= 0; i--) {
    str += input[i];
}

console.log(str);