const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());


console.log(foo(input));

function foo(n) {
    if (n === 1) return 2;

    if (n === 2) return 4;

    return (foo(n - 2) * foo(n - 1)) % 100;
}