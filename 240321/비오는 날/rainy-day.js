const fs = require('fs');

const [n, ...rest] = fs.readFileSync(0).toString().trim().split('\n');

class Data {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }

    print() {
        console.log(`${this.date} ${this.day} ${this.weather}`.trim());
    }

    dateStringToDateTime() {
        return new Date(this.date).getTime();
    }
}

const temp = [];

for (const el of rest) {
    const [date, day, weather] = el.trim().split(' ');
    temp.push(new Data(date, day, weather));
}

const result = temp.sort((a, b) => a.dateStringToDateTime() - b.dateStringToDateTime())
                    .find(data => data.weather === 'Rain');
                    
result.print();