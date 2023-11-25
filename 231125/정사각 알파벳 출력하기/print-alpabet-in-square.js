const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());
let index = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += String.fromCharCode(index);
        index++;
    }
    console.log(str);
}