const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(foo(input));

function foo(n) {
    if (n === 1) {
        return 0;
    }

    if (n % 2 === 0) {
        return foo(parseInt(n / 2)) + 1
    } else {
        return foo(n * 3 + 1) + 1;
    }
}