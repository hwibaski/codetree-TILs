const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));
console.log(`${parseInt(a / b)}...${a % b}`);