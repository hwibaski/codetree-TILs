const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if(isOnjeonsu(i)) {
        cnt++
    }
}

console.log(cnt);

function isOnjeonsu(n) {
   if (n % 2 === 0) {
        return false;
    } else if (n % 10 === 5) {
        return false;
    } else if (n % 3 === 0 && n % 9 !== 0) {
        return false;
    } else {
        return true;
    }
}