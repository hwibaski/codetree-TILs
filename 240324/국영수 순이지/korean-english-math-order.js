const fs = require('fs');

const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    print() {
        console.log(`${this.name} ${this.kor} ${this.eng} ${this.math}`);
    }
}

const students = lines.map(line => {
    const [name, kor, eng, math] = line.trim().split(' ');
    return new Student(name, parseInt(kor), parseInt(eng), parseInt(math));
});

students.sort((a, b) => {
    if (a.kor !== b.kor) {
        return b.kor - a.kor;
    }

    if (a.eng !== b.eng) {
        return b.eng - a.eng;
    }

    return b.math - a.math;
}).forEach(student => {
    student.print();
})