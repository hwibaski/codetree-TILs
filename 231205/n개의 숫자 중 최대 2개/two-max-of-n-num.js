const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const el = input[1].split(' ').map(Number);

el.sort((a, b) => b - a);

console.log(el[0], el[1]);