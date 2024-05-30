const fs = require('fs');
const lines = fs.readFileSync(0).toString().split('\n');
const [a, b] = lines[0].split(' ').map(Number);
const n = String(lines[1]);

function convertBase(a, b, n) {
    // a진수로 주어진 n을 10진수로 변환
    let decimalValue = parseInt(n, a);
    
    // 10진수로 변환된 값을 b진수로 변환
    let result = decimalValue.toString(b);
    
    return result;
}

console.log(convertBase(a, b, n))

function convertBaseWithoutParseInt(a, b, n) {
    // a진수로 주어진 n을 10진수로 변환
    let decimalValue = 0;  // 변환된 10진수 값을 저장할 변수 초기화
    let power = 1;         // 현재 자리수의 가중치 (a의 거듭제곱)

    // a 진수로 표현된 어떤 수 n을 10진수로 변환하는 과정
    // n 문자열의 각 자리를 역순으로 처리
    for (let i = n.length - 1; i >= 0; i--) {
        decimalValue += Number(n[i]) * power;  // 현재 자리의 값 * 현재 자리의 가중치를 더함
        power *= a;  // 다음 자리로 이동할 때 가중치를 a배 증가시킴
    }

    // 10진수로 변환된 값을 b진수로 변환
    let result = '';  // 변환된 b진수 문자열을 저장할 변수 초기화
    while (decimalValue > 0) {
        result = (decimalValue % b) + result;  // 현재 자리의 b진수 값을 앞에 추가
        decimalValue = Math.floor(decimalValue / b);  // 10진수 값을 b로 나눈 몫으로 업데이트
    }

    return result || '0';  // n이 '0'인 경우를 처리하기 위해 '0'을 반환
}