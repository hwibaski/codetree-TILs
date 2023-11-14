const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
        str += ' ';
    }

    for (let j = n - i; j <= n; j++) {
        str += '* ';
    }

    console.log(str);
}

for (let i = 0; i < n - 1; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
        str += ' ';
    }

    for (let j = n - i - 1; j > 0; j--) {
        str += '* ';
    }

    console.log(str);
}