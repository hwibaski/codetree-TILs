const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(foo(input));

function foo(n) {
    if (n === 1) return 1;

    return n + foo(n - 1);
}