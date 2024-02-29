const fs = require('fs');

const input = fs.readFileSync(0).toString();
const nums = input.split('\n')[1].split(' ').map(Number);

function multipleLCM(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    if (arr.length === 2) {
        return lcm(arr[0], arr[1]);
    } else {
        const first = arr[0];
        arr.shift(); // 배열에서 첫 번째 수 제거
        const second = multipleLCM(arr); // 나머지 수들의 최소공배수 구하기
        return lcm(first, second);
    }
}


function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    // console.log(a, b);
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(multipleLCM(nums));