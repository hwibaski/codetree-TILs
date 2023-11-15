const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n * 2; i++) {
    let star = '';
    if (i % 2 === 0) {
        for (let j = (2 * n - i) / 2; j >= 0; j--) {
             star += '* ';
        }
    } else {
        for (let j = 1; j <= ((i / 2) + 1); j++) {
             star += '* ';
        }
    }
     

    console.log(star);
}

// n : 5
// i -> 
// 2 -> 5
// 4 -> 4
// 6 -> 3
// 8 -> 2