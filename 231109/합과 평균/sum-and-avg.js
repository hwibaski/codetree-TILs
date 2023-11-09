const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().split(' ').map(el => Number(el));

const sum = a + b;
console.log(sum ,  (sum / 2).toFixed(1));