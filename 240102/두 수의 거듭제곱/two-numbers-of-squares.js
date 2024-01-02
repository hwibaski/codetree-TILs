const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(power(a, b));

function power(a, b) {
    return a ** b;
}