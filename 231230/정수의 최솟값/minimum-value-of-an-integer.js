const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number);

console.log(min(a, b, c));

function min(a, b, c) {
    return Math.min(Math.min(a, b), c);
}