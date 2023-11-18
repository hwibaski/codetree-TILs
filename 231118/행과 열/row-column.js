const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

for (let i = 0; i < a; i++) {
    let res = '';
    for (let j = 0; j < b; j++) {
        res += ((i + 1) * (j + 1)) + ' ';
    }
    console.log(res);
}