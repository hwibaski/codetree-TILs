const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

let res = "";
for (let i = 1; i < input + 1; i++) {
    res += (i + " ");
}

console.log(res);