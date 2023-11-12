const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

const hund = 100;

let res = "";
for (let i = n; i <= 100; i++) {
    if (i < 60) {
        res += ('F' + ' ');
    } else if (i >= 60 && i < 70) {
        res += ('D' + ' ');
    } else if (i >= 70 && i < 80) {
        res += ('C' + ' ');
    } else if (i >= 80 && i < 90) {
        res += ('B' + ' ');
    } else if (i >= 90) {
        res += ('A' + ' ');
    }
}

console.log(res);