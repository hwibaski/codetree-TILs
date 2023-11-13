const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let star = '';
    
    for (let j = 0; j < (2*i + 1); j++) {
        star += '*';
    }

    console.log(star);
}