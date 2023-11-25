const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const isPrime = (n) => {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) cnt++;
        if (cnt > 2) return false;
    }

    return true;
}

let ans = '';
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        ans += i + ' ';
    };
}

console.log(ans);

// 소수
// 약수가 1과 자기 자신 밖에 없는 수