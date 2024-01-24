const fs = require('fs');

const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(foo(a * b * c));

function foo(num) {
    if (num === 0) return 0;

    return foo(parseInt(num / 10)) + (num % 10);
}