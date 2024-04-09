const fs = require('fs');

const [d, h, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

class DateTime {
    constructor(day, hour, min) {
        this.day = day;
        this.hour = hour;
        this.min = min;
    }

    calElapsedTime(before) {
        let elapasedTime = 0;

        while (this.isDifferent(before)) {
            elapasedTime++;
            before.addOneMin();

            if (before.min === 60) {
                before.minToZero();
                before.addOneHour();
            }

            if (before.hour == 24) {
                before.hourToZero();
                before.addOneDay();
            }
        }

        return elapasedTime;
    }

    isDifferent(other) {
        return other.day !== this.day || other.hour !== this.hour || other.min !== this.min
    }

    minToZero() {
        this.min = 0;
    }

    hourToZero() {
        this.hour = 0;
    }

    addOneMin() {
        this.min += 1;
    }

    addOneHour() {
        this.hour += 1;
    }

    addOneDay() {
        this.day += 1;
    }
}

const from = new DateTime(11, 11, 11);
const to = new DateTime(d, h, m);

const result = to.calElapsedTime(from);

console.log(result);