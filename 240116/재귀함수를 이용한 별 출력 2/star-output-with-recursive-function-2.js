const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

foo(n);

function foo(n) {
    if (n === 0) return;
    
    printStar(n);
    foo(n - 1);
    printStar(n);
}

function printStar(n) {
    let star = '';
    for (let i = 0; i < n; i++) {
        star += '* ';
    }
    console.log(star);
}