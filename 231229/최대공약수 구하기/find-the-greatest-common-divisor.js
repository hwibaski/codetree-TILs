const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(gcd(n, m));

function gcd(n, m) {
    const min = Math.min(n, m);
    
    for (let i = min; i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            return i;
        }
    }
}