const fs = require('fs');

const [a, b] = fs.readFileSync(0)
                .toString()
                .split(" ")
                .map(el => Number(el));

console.log(a + b);