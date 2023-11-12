const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n').map(el => Number(el));

for (const el of input) {
    if (el % 2 === 1 && el % 3 === 0) {
        console.log(el);
    }
}