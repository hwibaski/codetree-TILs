// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);

for (let i = 0; i < n1; i++) {
    let success = true;
    
    for (let j = 0; j < n2; j++) {
        // arr1의 index가 범위 밖으로 벗어날때
        if (i + j >= n1) {
            success = false;
            break;
        }
        
        // arr1과 arr2가 일치하지 않을때
        if (arr1[i + j] !== arr2[j]) {
            success = false;
            break;
        }
    }
    
    // 완전히 일치할 경우, arr2는 arr1의 연속부분수열이 맞습니다.
    if (success) {
        console.log("Yes");
        return 0;
    }
}

console.log("No");