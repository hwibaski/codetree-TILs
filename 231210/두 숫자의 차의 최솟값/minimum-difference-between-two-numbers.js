const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        min = Math.min(Math.abs(arr[i] - arr[j]), min);
    }
}

console.log(min);