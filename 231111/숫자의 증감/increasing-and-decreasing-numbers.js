const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const c = input[0];
const n = Number(input[1]);

let res = "";

if (c === 'A') {
    for (let i = 1; i <= n; i++) {
        res += (i + " ");
    }
} else {
    for (let i = n; i > 0; i--) {
        res += (i + " ");
    }
}

console.log(res);