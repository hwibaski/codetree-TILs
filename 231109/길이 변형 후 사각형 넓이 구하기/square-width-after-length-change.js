const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

const width = a + 8;
const height = b * 3;

console.log(width);
console.log(height);
console.log(width * height);