const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let index = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
        str += String.fromCharCode(index);
        index++;
    }
    console.log(str);
}