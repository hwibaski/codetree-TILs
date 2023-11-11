const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [a, b] = input.split(' ').map(el => Number(el));

let res = "";
if (a > 0) {
    for (let i = 0; i < b; i++) {
        res += a;
    }
} else {
    res = "0";
}

console.log(res);