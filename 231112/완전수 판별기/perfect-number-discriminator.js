// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let sumVal = 0;

// 1부터 n-1까지의 수 중에서 약수를 찾습니다.
for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sumVal += i;
    }
}

// sum과 n이 같다면 P을, 다르다면 N을 출력합니다.
if (sumVal === n) {
    console.log("P");
}
else {
    console.log("N");
}