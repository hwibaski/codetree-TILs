const fs = require('fs');
const [start, end] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

let res = 0;
for (let i = start; i <= end; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) sum += j;
    }

    if (sum === i) res++;
}

console.log(res);


// 완전수 판별법
// 자기 자신을 제외한 모든 양의 약수들을 더했을 때 자기 자신이 되는 수
// 일단 1 ~ 자기 자신 - 1 까지 루프 돌고
// 약수 인지는 어떻게 판단하지?
// 루프 돌아서 6 % i === 0 이면 약수네