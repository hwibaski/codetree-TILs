const fs = require('fs');

const [id, level] = fs.readFileSync(0).toString().trim().split(' ');

class C{
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }

    print() {
        console.log(`user ${this.id} lv ${this.level}`);
    }
}

const obj1 = new C(id, level);
const obj2 = new C('codetree', 10);

obj2.print();
obj1.print();