const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = [...input];

for (let i = 2; i < 10; i++) {
    arr[i] = arr[i - 1] + (arr[i - 2] * 2);
}

console.log(arr.join(' '));