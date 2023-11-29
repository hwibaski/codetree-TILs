const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const cntArr = Array(6).fill(0);

for (let i = 0; i < input.length; i++) {
    cntArr[input[i]- 1]++;
}

for (let i = 0; i < 6; i++) {
    console.log(`${i + 1} - ${cntArr[i]}`);
}