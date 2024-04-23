const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();

const data = [];

while (true) {
    if (n < 2) {
        data.push(n);
        break;
    }

    data.push(n % 2);
    n = Math.floor(n / 2);
}

let biNumber = '';

for (let i = data.length - 1; i >= 0; i--) {
    biNumber += data[i];
}

console.log(biNumber);