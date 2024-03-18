const fs = require('fs');
const [name, code] = fs.readFileSync(0).toString().trim().split(' ');

class Obj {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    print() {
        console.log(`product ${this.code} is ${this.name}`);
    }
}

const obj1 = new Obj('codetree', 50);
const obj2 = new Obj(name, code);

obj1.print();
obj2.print();