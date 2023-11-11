const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

let res = "";
while (input > 0) {
    res += (input + " ");
    input--;
}

console.log(res);