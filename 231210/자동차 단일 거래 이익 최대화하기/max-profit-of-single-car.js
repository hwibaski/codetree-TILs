const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let max = -1;

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        // console.log(arr[i], arr[j]);
        if (arr[j] - arr[i] > 0 && arr[j] - arr[i] > max) {
            max = arr[j] - arr[i];
            // console.log(max, i, j);
        }
    }
}

console.log(max);