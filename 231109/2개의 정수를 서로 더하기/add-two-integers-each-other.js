const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().split(' ').map(el => Number(el));

a += b;
b += a;

console.log(a, b);