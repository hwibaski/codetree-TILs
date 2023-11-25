const fs = require('fs');
const [start, end] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

let res = 0;
for (let i = start; i <= end; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
    }

    if (cnt === 3) res++;
}

console.log(res);