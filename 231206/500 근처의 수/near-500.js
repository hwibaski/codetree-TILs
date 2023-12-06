const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let maxVal = 0;
let minVal = 1001;

for (let i = 0; i < 10; i++) {
    if (arr[i] < 500 && arr[i] > maxVal) maxVal = arr[i];
    if (arr[i] > 500 && arr[i] < minVal) minVal = arr[i];
}

console.log(maxVal, minVal);