const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(func(n, m));

function func(n ,m) {
    let a = n;
    let b = m;
    while(true) {
        if (a < b) {
            a += n;
        } else if (b < a) {
            b += m;
        }

        if (a === b) {
            return b;
        }
    }
}