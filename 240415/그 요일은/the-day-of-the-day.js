const fs = require('fs');

const lines = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = lines[0].split(' ').map(Number);
const day = lines[1].trim();

// m1, d1  m2, d2 까지 며칠이 소요되는 지 확인
function numOfDays(m, d) {
    // 계산 편의를 위해 월마다 몇 일이 있는지를 적어줍니다.
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    // 1월부터 (m - 1)월 까지는 전부 꽉 채워져 있습니다.
    for (let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    // m월의 경우에는 정확히 d일만 있습니다.
    totalDays += d;

    return totalDays;
}

// 두 날짜간의 차이가 몇 일인지를 구합니다.
let diff = numOfDays(m2, d2) - numOfDays(m1, d1);


const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 주간 단위로 계산
let cnt = Math.floor(diff / 7);

// 주간 단위로 계산하고 남은 일 수
const rest = diff % 7;

// 주어진 요일이 월요일로부터 며칠 떨어져 있는지 확인
const distanceFromMonday = dayOfWeek.findIndex(el => el === day);

// 주간 단위로 계산하고 남을 일수보다 주어진 요일이 월요일부터 떨어져 있는 거리가 작다면 해당 요일은 포함되어 있는 것이므로 카운트를 1 증가시킨다.
if (distanceFromMonday <= rest) {
    cnt++;
}

console.log(cnt);

// 월  화 수  목 금  토  일
// 5  6  7  8  9  10 11
// 12 13 14 15 16 17 18
// 19 20 21 22 23 24 25
// 26 27 28 29 1  2  3
// 4  5  6  7  8  9