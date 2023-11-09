const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

const sum = input.reduce((prev, cur) => prev + cur, 0);

console.log(sum);
console.log((sum / input.length).toFixed(0));