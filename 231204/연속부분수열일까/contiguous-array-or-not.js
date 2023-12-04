const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const start = a.indexOf(b[0]);

for (let i = 0; i < b.length; i++) {
    if (a[i + start] !== b[i]) {
        console.log('No');
        return;
    }
}

console.log('Yes');