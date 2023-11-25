const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());
let idx = 'A'.charCodeAt();

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '  ';
    }

    for (let j = 0; j < n - i; j++) {
        str += String.fromCharCode(idx++) + ' ';
        if (idx > 'Z'.charCodeAt()) idx = 'A'.charCodeAt();
    }

    console.log(str);
}