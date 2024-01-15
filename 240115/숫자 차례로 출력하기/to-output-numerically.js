const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

first(n);
console.log();
second(n);

function first(n) {
    if (n === 0) return;

    let str = n + ' ';

    first(n - 1);
    process.stdout.write(str);
}

function second(n) {
    if (n === 0) return;
    
    let str = n + ' ';

    process.stdout.write(str);
    second(n - 1);
}