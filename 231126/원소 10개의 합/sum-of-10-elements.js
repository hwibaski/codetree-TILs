const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

console.log(input.reduce((prev, next) => prev + next));