const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {
    let str = '';
    for (let j = i; j <= n; j++) {
        str += j + ' ';
    }
    console.log(str);
}