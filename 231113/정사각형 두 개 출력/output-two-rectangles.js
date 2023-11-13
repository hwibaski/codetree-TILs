const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j < n; j++) {
        star += '*';
    }
    console.log(star);
}

console.log();

for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j < n; j++) {
        star += '*';
    }
    console.log(star);
}