const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

foo(n);

function foo(n)  {
    if (n === 0) return;

    process.stdout.write(`${n} `);
    foo(n - 1);
    process.stdout.write(`${n} `);
}