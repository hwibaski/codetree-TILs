// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let prevMaxIdx = n;

let str = "";

// 첫 번째 원소가 최대가 되기 전까지 계속 반복합니다.
while (true) {
    // 최대값 후보의 시작은 항상 첫 번째 원소입니다.
    let maxIdx = 0;

    // 두 번째 원소부터 바로 직전 최대로 뽑힌
    // 원소 전까지 보면서 그 중 최대 index를 갱신합니다.
    // index를 오름차순으로 보기 때문에
    // 최댓값이 여러개인 경우 가장 왼쪽에 있는
    // 원소가 뽑히게 됩니다.

    for (let i = 1; i < prevMaxIdx; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
        }
    }

    str += `${maxIdx + 1} `;

    // 최대인 원소가 첫 번째 원소라면 종료합니다.
    if (maxIdx === 0) {
        break;
    }
    
    // 바로 직전 최대 index를 갱신해줍니다.
    prevMaxIdx = maxIdx;
}

console.log(str);