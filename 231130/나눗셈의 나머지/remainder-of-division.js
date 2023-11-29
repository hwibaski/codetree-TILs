const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const cntArr = Array(11).fill(0);

while (a > 1) {
    cntArr[a % b]++;
    a = parseInt(a / b);
}

console.log(cntArr.reduce((acc, cur) => acc + (cur ** 2)));