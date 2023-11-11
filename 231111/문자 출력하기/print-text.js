const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();

let res = "";
for (let i = 0; i < 8; i++) {
    res += input;
}

console.log(res);