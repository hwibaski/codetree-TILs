const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';
input.forEach((el) => {
    // console.log(el);
    if (el === 0) return false;

    if (el % 2 !== 0) {
        str += (el + 3) + ' ';
    } else {
        str += parseInt(el / 2) + ' ';
    }
})

console.log(str);