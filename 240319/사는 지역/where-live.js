const fs = require('fs');

const [n, ...rest] = fs.readFileSync(0).toString().trim().split('\n');

class Obj {
    constructor(name, address, region) {
        this.name = name;
        this.address = address;
        this.region = region;
    }

    print() {
        console.log(`name ${this.name}`);
        console.log(`addr ${this.address}`);
        console.log(`city ${this.region}`);
    }
}

const temp = [];
for (el of rest) {
    const [name, address, region]= el.split(' ');
    temp.push(new Obj(name, address, region));
}

const sorted = temp.sort((a, b) => b.name.localeCompare(a.name));

sorted[0].print();