const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => parseInt(el));

console.log(a + b);
console.log(a - b);
console.log(Math.floor(a / b));
console.log(a % b);