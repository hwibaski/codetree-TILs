const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let starLine = '';
    for (let j = n - i; j > 0; j--) {
        starLine += ('*' + ' ');
    }
    console.log(starLine);
}