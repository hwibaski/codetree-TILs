const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= n - (2 * i) + (n- 3); j++) {
        str += ' ';
    }

    for (let j = 0; j <= i; j++) {
        str += '@ ';
    }
    console.log(str);
}

// console.log('--------')

for (let i = 0; i < n - 1; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
        str += '@ ';
    }
    console.log(str);
}