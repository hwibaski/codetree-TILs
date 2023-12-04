const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let result = true;
const indexes = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) indexes.push(i);
}

for (let j = 0; j < indexes.length; j++) {

    const start = indexes[j];
    // console.log(start);
    result = true;
    for (let i = 0; i < b.length; i++) {
        // console.log(a[i + start], b[i]);
        if (a[i+ start] && a[i + start] !== b[i]) {
            // console.log('No');
            result = false;
            break;
        }
    }

    if (result) {
        console.log('Yes');
        return 0;
    }
}

console.log('No');