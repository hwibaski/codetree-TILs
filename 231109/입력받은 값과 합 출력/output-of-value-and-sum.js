const fs = require('fs');

const [a, b] = fs.readFileSync(0)
                .toString()
                .split(" ")
                .map(el => parseInt(el));

console.log(a, b, a + b);