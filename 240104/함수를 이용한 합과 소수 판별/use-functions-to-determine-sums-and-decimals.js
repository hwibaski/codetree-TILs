const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (isPrime(i) && isAllNumSumEven(i)) cnt++;
}

console.log(cnt);

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function isAllNumSumEven(n) {
    let num = n;
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }

    return sum % 2 === 0;
}