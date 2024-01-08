const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [m, d] = input[0].split(" ").map(Number);

if (judgeDay(m, d)) {
    console.log("Yes");
} else {
    console.log("No");
}

function judgeDay(m, d) {
    if (m <= 12 && d <= lastDayNumber(m)) {
        return true;
    }

    return false;
}

function lastDayNumber(m) {
    if (m === 2) {
        return 28;
    }
    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return 30;
    }

    return 31;
}