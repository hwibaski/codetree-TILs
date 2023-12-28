const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

print(n);

function print(n) {
    let cnt = 1;

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += cnt + ' ';
            cnt++;
            if (cnt === 10) cnt = 1;
        }
        console.log(str);
    }
}