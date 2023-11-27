const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const el = input[1].split(' ').map(Number);

let str = '';
el.filter((el) => el % 2 === 0).forEach(el => str += el + ' ');

console.log(str);