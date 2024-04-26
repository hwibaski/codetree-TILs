const fs = require('fs');

const input = fs.readFileSync(0).toString().trim()
let binary = input.split('').map(Number);

let num = 0;
for (const bit of binary) {
    num = num * 2 + bit;
}

console.log(num);