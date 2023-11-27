const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const elem = input[1].split(' ').map(Number);

let str = ''
elem.forEach(el => str += (el ** 2) + ' ');
console.log(str);