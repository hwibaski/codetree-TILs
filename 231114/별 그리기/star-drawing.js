const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i <= n; i++) {
    let str = '';
    if (i === 0) continue;
    for (let j = n; j > i; j--) {
        str += ' ';
    }

    for (let j = 0; j < 2*i - 1; j++) {
        str += '*';
    }

    console.log(str);
}

for (let i = n - 1; i > 0; i--) {
    let str = '';
    if (i === 0) continue;
    for (let j = i; j < n; j++) {
        str += ' ';
    }

    for (let j = 2*i - 1; j > 0; j--) {
        str += '*';
    }

    console.log(str);
}