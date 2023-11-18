const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = n; j > 0; j--) {
        res += (i + 1) * j + ' ';
    }
    console.log(res);
}