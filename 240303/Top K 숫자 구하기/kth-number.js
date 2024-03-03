const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const [n, k] = input.split('\n')[0].split(' ').map(Number);
const nums = input.split('\n')[1].split(' ').map(Number);

const sorted = nums.sort((a, b) => a - b);

console.log(sorted[k - 1]);