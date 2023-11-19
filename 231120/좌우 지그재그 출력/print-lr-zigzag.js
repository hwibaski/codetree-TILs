const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let cnt = 0;
for (let i = 0; i < n; i++) {
    let str  = '';
    if (i % 2 === 0) {
        cnt = cnt !== 0 ? cnt + n - 1 : cnt;

    } else {
        cnt = cnt + n + 1;
    }
    for (let j = 0; j < n; j++) {
        cnt++;
        str += cnt + ' ';
    }
    console.log(str);
}