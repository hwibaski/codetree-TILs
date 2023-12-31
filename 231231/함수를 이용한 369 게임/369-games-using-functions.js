const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);

const result = calCnt(a, b);
console.log(result);

function calCnt(a, b) {
    let cnt = 0;
    for (let i = a; i <= b; i++) {

        if (hasThreeSixNine(i) || isThreeMultiple(i)) {
            cnt++;
        }
    }

    return cnt;
}

function hasThreeSixNine(n) {
    const strNum = n.toString();

    return Array.from(strNum).some(digit => digit === '3' || digit === '6' || digit === '9');
}

function isThreeMultiple(n) {
    return n % 3 === 0;
}