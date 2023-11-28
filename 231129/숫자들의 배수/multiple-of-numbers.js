// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr = Array(10);
let cnt = 0;

// 입력받은 정수의 배수를 배열에 저장
arr[0] = n;
for (let i = 1; i < 10; i++) {
    arr[i] = arr[i - 1] + arr[0];
}

// 배열의 원소들을 출력하다가 5의 배수가 2번 나오면 출력을 멈춤
let str = "";

for (let i = 0; i < 10; i++) {
    str += arr[i] + " ";
    if (arr[i] % 5 === 0) {
        cnt++;
    }
    if (cnt >= 2) {
        break;
    }
}

console.log(str);