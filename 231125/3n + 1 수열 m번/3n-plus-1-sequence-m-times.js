const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const m = input[0];

for (let i = 1; i <= m; i++) {
    let cnt = 0;
    let n = Number(input[i]);

    if (n === 1) {
        console.log(cnt);
        continue;
    }

    // 언제까지? n이 1이 될때까지
    // 이 짓을 몇 번해야 n이 1이 되는지 계산
    while (n !== 1) {
        // n 이 짝수 -> 2로 나누기
        if (n % 2 === 0) {
            n = parseInt(n / 2);
        } else { // n 이 홀수 -> 3을 곱하고 1 더하기
            n = (n * 3) + 1;
        }
        cnt++;
    }

    console.log(cnt);
}