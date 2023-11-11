const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().split(' ').map(el => Number(el));

let res = "";
let i = a;
while (i >= b) {
    res += (i + " ");
    i -= 2;
}

console.log(res);