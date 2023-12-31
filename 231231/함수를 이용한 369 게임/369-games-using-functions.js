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

    return Array.from(strNum)
                .map(Number)
                .some(digit => digit === 3 || digit === 6 || digit === 9);
}

function isThreeMultiple(n) {
    return n % 3 === 0;
}

// 문자열을 배열로 쪼개지 않고 while 문으로 해결하는 방법
// function contains369(n) {
//     // 계속 10으로 나눠주며
//     // 일의 자리를 조사합니다.
//     while (n > 0) {
//         if (n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
//             return true;
//         }

//         n = parseInt(n / 10);
//     }

//     return false;
// }