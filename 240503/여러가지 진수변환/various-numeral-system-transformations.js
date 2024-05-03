const fs = require('fs');

let [n, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const data = [];

while (true) {
    if (n < b) {
        data.push(n);
        break;
    }

    data.push(n % b);
    n = Math.floor(n / b);
}

let biNumber = '';

for (let i = data.length - 1; i >= 0; i--) {
    biNumber += data[i];
}

console.log(biNumber);