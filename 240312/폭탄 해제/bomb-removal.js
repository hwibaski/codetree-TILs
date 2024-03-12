const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const [code, color, second] = input.split(' ');

class Obj{
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }

    print() {
        console.log(`code : ${this.code}`);
        console.log(`color : ${this.color}`);
        console.log(`second : ${this.second}`);
    }
}
const obj = new Obj(code, color, second);

obj.print();