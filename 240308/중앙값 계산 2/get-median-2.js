const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const n = Number(input.split('\n')[0]);
const nums = input.split('\n')[1].split(' ').map(Number);

let str = '';

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        const sorted = nums.slice(0, i + 1).sort((a, b) => a - b);
        str += sorted[parseInt(sorted.length / 2)] + ' ';
    }
}

console.log(str);