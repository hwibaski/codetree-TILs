const fs = require('fs');

const [d, h, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

class DateTime {
    constructor(day, hour, min) {
        this.day = day;
        this.hour = hour;
        this.min = min;
    }

    calElapsedTime(before) {
        // const result = this.isFasterThan111111(before);
        // console.log(result);
        // if (this.isFasterThan111111(before)) {
        //     return -1;
        // }

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

    isFasterThan111111() {
        // console.log(other);
        if (this.day < 11) {
            return true;
        }

        if (this.day === 11 && this.hour < 11) {
            return true;
        }

        if (this.day === 11 && this.hour === 11 && this.min < 11) {
            return true;
        }

        return false;
    }
}

const from = new DateTime(11, 11, 11);
const to = new DateTime(d, h, m);
if (to.isFasterThan111111()) {
    console.log(-1);
    return;
}

const result = to.calElapsedTime(from);


console.log(result);