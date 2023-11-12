const fs = require('fs');
const input = fs.readFileSync(0).toString();
const n = Number(input);

let res = "";
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        res += (1 + " ");
    } else {
        res += (0 + " ");
    }
}

console.log(res);