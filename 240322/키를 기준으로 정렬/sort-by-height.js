const fs = require('fs');

const [n, ...rest] = fs.readFileSync(0).toString().trim().split('\n');

class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    print() {
        console.log(`${this.name} ${this.height} ${this.weight}`);
    }
}

const temp = [];

rest.forEach(el => {
    const [name, height, weight] = el.trim().split(' ');

    temp.push(new Person(name, height, weight));
})

const sorted = temp.sort((a, b) => a.height - b.height);

sorted.forEach(el => {
    el.print();
})