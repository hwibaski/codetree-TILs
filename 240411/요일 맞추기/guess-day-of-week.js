const fs = require('fs');

const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

class DateTime {
    constructor(month, day) {
        this.month = month;
        this.day = day;
    }
}

const standard = new DateTime(m1, d1);
const dateTime = new DateTime(m2, d2);

// 두 시간의 일 수 차이를 구한다.

// 두 시간 중 누가 앞서는지 구한다.

// standard가 빠르다면 월요일에서 해당 일수만큼 뒤로 감는다.

// dateTime이 빠르다면 월요일에서 해당 일수만큼 앞으로 감는다.

// const times = whoFaster(standard, dateTime);
// console.log(times);

const tmp = standardIsFaster(standard, dateTime);
const elapsedTime = getElapsedTime(standard, dateTime);

if (elapsedTime === 0) {
    console.log('Mon');
    return;
}


if (tmp === true) {
    const day = calDayOfWeek(elapsedTime);
    console.log(day);
} else {
    const day = tempCalc(elapsedTime);
    console.log(day);
}



function tempCalc(elapsedTime) {
    const temp = elapsedTime % 7;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return days[7 - temp];
}

function calDayOfWeek(elapsedTime) {
    // const copyElapsedTime = elapsedTime;

    const temp = elapsedTime % 7;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return days[temp];    
}

function standardIsFaster(a, b) {
    const times = whoFaster(a, b);

    if (times[0]=== a) {
        return true;
    } else {
        return false;
    }
}


function whoFaster(a, b) {
    if (a.month === b.month && a.day > b.day) {
        return [b, a];
    } else if (a.month === b.month && a.day < b.day){
        return [a, b];
    } else if (a.month < b.month) {
        return [a, b];
    } else if (a.month > b.month) {
        return [b, a]
    }

    return [];
}

function getElapsedTime(a, b) {
    const times = whoFaster(a, b);

    if (times.length === 0) {
        return 0;
    }

    const faster = times[0];
    const slower = times[1];

    let elapsedTime = 0;

    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    while (faster.month !== slower.month || faster.day !== slower.day) {
        elapsedTime++;
        faster.day = ++faster.day;

        const maxDays = days[faster.month - 1];

        if (faster.day === maxDays) {
            faster.day = 1;
            faster.month = ++faster.month;
        }
    }

    return elapsedTime;
}