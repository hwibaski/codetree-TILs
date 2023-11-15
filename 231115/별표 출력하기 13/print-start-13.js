const fs = require('fs');

const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n * 2; i++) {
    // console.log(i);
    let star = '';
    if (i % 2 === 0) {
        for (let j = 0; j < n - i / 2; j++) {
            star += '* ';
        }
    } else {
        for (let j = 0; j < parseInt((i / 2) + 1); j++) {
            star += '* ';
        }
    }
    console.log(star);
}