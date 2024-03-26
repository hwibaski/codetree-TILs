const fs = require('fs');

const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(hieght, weight, number) {
        this.height = hieght;
        this.weight = weight;
        this.number = number;
    }

    print() {
        console.log(`${this.height} ${this.weight} ${this.number}`);
    }
}

const students = lines.map((line, index) => {
    const [height, weight] = line.trim().split(' ').map(Number);

    return new Student(height, weight, index + 1);
})

students.sort((a, b) => {

    if (a.height === b.height && a.weight === b.weight) {
        return a.number - b.number;
    }
    
    if (a.height !== b.height) {
        return b.weight - a.weight;
    }

    return b.height - a.height;
}).forEach(s => {
    s.print();
})