const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const countArr = Array(9).fill(0);

for (let i = 0; i < n; i++) {
    countArr[nums[i] - 1]++;
}

for (const cnt of countArr) {
    console.log(cnt);
}