const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
let zeroPoint;
for (let i = 0; i < 100; i++) {
    arr.push(input[i]);
    if (arr[i] === 0) {
        zeroPoint = i;
        break;
    }
    if (arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
    } else {
        arr[i] = arr[i] + 3;
    }
}

// 0이 나오기 전까지의 배열의 인덱스에 저장된 값을 출력
let str = "";
for (let i = 0; i < zeroPoint; i++) {
    str += arr[i] + " ";
}

console.log(str);