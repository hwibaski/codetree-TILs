const fs = require('fs');

const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight);
    }

    print() {
        console.log(`${this.name} ${this.height} ${this.weight}`);
    }

    hasSameHeight(student) {
        this.height === student.height;
    }
}

lines.map(l => {
    const [name, height, weight] = l.trim().split(' ');
    return new Student(name, height, weight);
}).sort((a, b) => {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }

    return a.height - b.height;
}).forEach(s => s.print());