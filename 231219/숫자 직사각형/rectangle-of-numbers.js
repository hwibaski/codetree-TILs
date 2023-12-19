const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = Array(n).fill(0).map(() => Array(m).fill(0));

let cnt = 0;
arr.forEach(line => {
    let str = '';
    line.forEach(() => {
        cnt++;
        str += cnt + ' ';
    })
    console.log(str);
})