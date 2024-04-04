const fs = require('fs');
const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(height, weight, number) {
        this.height = Number(height);
        this.weight = Number(weight);
        this.number = Number(number);
    }

    print() {
        console.log(`${this.height} ${this.weight} ${this.number}`);
    }
}

lines.map((line, i) => {
    const [height, weight] = line.trim().split(' ');

    return new Student(height, weight, i + 1);
}).sort((a, b) => {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }

    return a.height - b.height;
}).forEach(s => {
    s.print();
})