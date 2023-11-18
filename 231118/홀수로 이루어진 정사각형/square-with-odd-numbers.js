const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = 0; j < n; j++) {
        res += 2 * j + 1 + 10 + 2 * i + ' ';
    }
    console.log(res);
}

// 1 3 5 7
// 3 5 7 9