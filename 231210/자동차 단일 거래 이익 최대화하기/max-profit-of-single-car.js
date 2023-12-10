const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

if (n === 1) {
    console.log(0);
    return;
}

let max = -1;

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[j] - arr[i] >= 0 && arr[j] - arr[i] > max) {
            max = arr[j] - arr[i];
        }
    }
}

console.log(max);