const fs = require('fs');
let [pp, p] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';
str += pp + ' ';
str += p + ' ';

for (let i = 3; i <= 10; i++) {
    let temp = parseInt((pp + p) % 10);
    
    str += temp + ' ';
    pp = p;
    p = temp;

}

console.log(str);