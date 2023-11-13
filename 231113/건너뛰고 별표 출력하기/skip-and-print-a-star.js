const fs = require('fs');

const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j < i + 1; j++) {
        star += '*';
    }
    console.log(star + '\n');
}

for (let i = n - 1; i > 0; i--) {
    let star = '';
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    console.log(star + '\n');
}