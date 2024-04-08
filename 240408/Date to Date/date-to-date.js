const fs = require('fs');
let [m1, d1, m2, d2] = fs.readFileSync(0).toString().split(' ').map(Number);

let elapsedDay = 1;
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

while (m1 !== m2 || d1 !== d2) {
    // console.log(m1, m2, d1, d2);

    elapsedDay++;
    d1++;

    if (d1 > num_of_days[m1]) {
        d1 = 1;
        m1++;
    }
}

console.log(elapsedDay);