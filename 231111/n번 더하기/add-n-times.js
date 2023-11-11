const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [a, n] = input.split(' ').map(el => Number(el));

let sum = a + n;
for (let i = 0; i < n; i++) {
    console.log(sum);
    sum += n;
}