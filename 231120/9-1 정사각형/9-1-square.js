const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 10;
for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = 0; j < n; j++) {
        cnt === 1 ? cnt = 9 : cnt--;
        res += cnt;
    }
    console.log(res);
}