const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = i; j <= i ** 2; j++) {
        if (j % i !== 0) continue;
        str += j + ' ';
    }
    console.log(str);
}