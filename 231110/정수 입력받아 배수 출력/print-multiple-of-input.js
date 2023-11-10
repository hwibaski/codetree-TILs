const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

let res = ``;

for (let i = 1; i < 6; i++) {
    res += (i * input) + " ";
}

console.log(res);