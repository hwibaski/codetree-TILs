const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ');
const n = Number(input[0]);
const m = Number(input[1]);

const arr = Array(n).fill(0).map(() => Array(m).fill(0));

let cnt = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[i][j] = cnt++;
    }
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < m; j++) {
        str += arr[i][j] + ' ';
    }

    console.log(str);
}