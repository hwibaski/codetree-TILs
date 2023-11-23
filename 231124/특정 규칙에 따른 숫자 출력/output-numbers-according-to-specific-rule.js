const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '  ';
    }

    for (let j = n - i; j > 0; j--) {
        if (cnt === 9) {
            cnt = 1;
        } else {
            cnt++;
        }

        str += cnt + ' ';
    }
    console.log(str);
}