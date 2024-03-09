const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const [code, place, time] = input.split(' ');

class C {
    constructor(code, place, time) {
        this.code = code;
        this.place = place;
        this.time = time;
    }

    print() {
        console.log(`secret code : ${this.code}`);
        console.log(`meeting point : ${this.place}`);
        console.log(`time : ${this.time}`);
    }
}

const c = new C(code, place, time);
c.print();