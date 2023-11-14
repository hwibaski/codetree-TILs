const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';

    if (i % 2 === 0) {
        for (let j = 0; j < i; j++) {
            str += '* ';
        }
    } else {
        str += '*';
    }

    console.log(str);
}