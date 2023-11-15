const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0 || i === n - 1 || j === n - 1 || i > j) {
            star += '* '; 
        } else {
            star += '  ';
        }
    }
    console.log(star);
}