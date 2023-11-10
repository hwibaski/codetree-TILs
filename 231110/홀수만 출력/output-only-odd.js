const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let res = "";

for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
        res += (i + " ");
    }
}

console.log(res);