const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

const sum = input.reduce((acc, cur) => acc + cur);
const avg = (sum / input.length).toFixed(1);

console.log(avg);