const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(':').map(el => Number(el));

console.log(`${a+1}:${b}`);