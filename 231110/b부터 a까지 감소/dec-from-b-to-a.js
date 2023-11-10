const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().split(' ').map(el => Number(el));

let res = "";

for (let i = b; i >= a; i--) {
    res += (i + " ");
}

console.log(res);