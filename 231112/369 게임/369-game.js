const fs = require('fs');

const input = fs.readFileSync(0).toString();
const n = Number(input);

// 숫자가 3의 배수
// 숫자가 3, 6, 9 중에 하나라도 들어가 잇는 경우 
// 0

// 그렇지 않으면 숫자 그대로 출력

let res = '';

for (let i = 1; i <= n; i++) {
    if (i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9') || i % 3 === 0) {
        res += (0 + ' ');
    } else {
        res += (i + ' ');
    }
}

console.log(res);