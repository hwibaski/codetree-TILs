const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);

let sum = 0;

for (let i = a; i <= b; i++) {
    if (i === 1) break;

    if (isPrime(i)) {
        sum += i;
    }
}

console.log(sum);

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}