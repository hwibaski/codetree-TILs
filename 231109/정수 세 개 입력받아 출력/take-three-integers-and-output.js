const fs = require('fs');

const [first, second] = fs.readFileSync(0).toString().split('\n');

const [a, b] = first.split(' ');
const c = second;

console.log(a, b, c);