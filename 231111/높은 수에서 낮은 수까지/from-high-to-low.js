const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const [a, b] = input.split(' ').map(el => Number(el));

let res = "";

for (let i = Math.max(a, b); i >= Math.min(a, b); i--) {
    res += (i + " ");
}

console.log(res);