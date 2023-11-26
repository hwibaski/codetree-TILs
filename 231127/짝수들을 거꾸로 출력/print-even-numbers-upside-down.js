const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let str = '';
for (let i = n; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
        str += nums[i] + ' ';
    }
}

console.log(str);