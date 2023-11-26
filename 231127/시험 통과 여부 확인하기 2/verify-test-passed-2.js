const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let passCnt = 0;

for (let i = 1; i <= n; i++) {
    const sum = input[i].split(' ').map(Number).reduce((acc, cur) => acc + cur);
    const subjectCnt = 4;

    if (sum / subjectCnt >= 60) {
        console.log('pass');
        passCnt++;
    } else {
        console.log('fail');
    }
}

console.log(passCnt);