const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

let res = "";

for (let i = input; i < 101; i++) {
    res += (i + " ");
}

console.log(res);