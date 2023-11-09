const fs = require('fs');

const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(el => Number(el));

const sum = a + b + c;
const avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum - avg);