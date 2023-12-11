const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (const line of input) {
    const arr = line.split(' ');
    let str = '';
    for (const el of arr) {
        str += el.toUpperCase() + ' ';
    }

    console.log(str);
}