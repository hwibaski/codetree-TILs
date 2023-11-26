const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = input[2] + input[4] + input[9];

console.log(sum);