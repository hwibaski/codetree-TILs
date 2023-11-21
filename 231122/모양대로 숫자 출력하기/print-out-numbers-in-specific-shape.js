const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '  ';
    }

    let cnt = n - i;
    for (let j = n - i; j > 0; j--) {
        str += cnt + ' ';
        cnt--;
    }
    
    console.log(str);
}