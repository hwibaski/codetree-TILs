const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// const [n1, n2] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const start = a.indexOf(b[0]);

for (let i = 0; i < b.length; i++) {
    // console.log(a[i + start], b[i]);
    if (a[i + start] !== b[i]) {
        console.log('No');
        break;
    }
}