const fs = require('fs');

const [a, b, c] = fs.readFileSync(0).toString().split('\n').map(el => Number(el));

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));