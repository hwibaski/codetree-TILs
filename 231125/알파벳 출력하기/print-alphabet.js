const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let index = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
        str += String.fromCharCode(index);
        if (index === 90) {
            index = 'A'.charCodeAt();
        } else {
            index++;
        }
    }
    console.log(str);
}