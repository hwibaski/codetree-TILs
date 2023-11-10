const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let i = a;
let res = "";
while (i <= b) {
    if (i % 2 == 0) {
        res += (i + " ");
    }
    i += 2;
}

console.log(res);