const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

let prod = 1;
for (let i = a; i <= b; i++) {
    prod *= i;
}

console.log(prod);