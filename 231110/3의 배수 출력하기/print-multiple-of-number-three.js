const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

let i = 3;
let res = "";
while (i < 28) {
    if (i % 3 == 0) {
        res += (i + " ");
    }
    i++;
}

console.log(res);