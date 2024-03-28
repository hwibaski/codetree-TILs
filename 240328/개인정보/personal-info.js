const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');

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

const students = lines.map(l => {
    const [name, height, weight] = l.trim().split(' ');
    return new Person(name, Number(height), Number(weight).toFixed(1));
})

console.log('name');
result(students, (a, b) => a.name.localeCompare(b.name));

console.log();

console.log('height');
result(students, (a, b) => b.height - a.height);


function result(students, compareFunc) {
    students.sort(compareFunc)
        .forEach(s => s.print());
}