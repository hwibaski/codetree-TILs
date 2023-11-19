const fs = require('fs');

const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += ++cnt + ' ';
    }

    console.log(str);
}