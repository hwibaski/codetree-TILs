const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split('\n');

console.log(a);
console.log(Number(b).toFixed(2));
console.log(Number(c).toFixed(2));