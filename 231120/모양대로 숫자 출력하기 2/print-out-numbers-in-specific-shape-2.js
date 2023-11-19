const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = 0; j < n; j++) {
        cnt === 8 ? cnt = 2 : cnt += 2;
        res += cnt + ' ';
    }

    console.log(res);
}