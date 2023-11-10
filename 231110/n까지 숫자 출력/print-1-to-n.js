const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

let res = "";
let i = 1;
while (i <= input) {
    res += (i + " ");
    i++;
}

console.log(res);