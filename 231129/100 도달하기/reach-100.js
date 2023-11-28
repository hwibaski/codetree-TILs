const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const arr = [];

arr[0] = 1;
arr[1] = n;

let str = `${arr[0]} ${arr[1]} `;

for (let i = 2;;i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    str += arr[i] + ' ';

    if (arr[i] > 100) {
        break;
    }
}

console.log(str);