const fs = require('fs');
const n = fs.readFileSync(0).toString();

for (let i = n; i > 0; i--) {
    let res = '';
    for (let j = n; j > 0; j--) {
        res += `(${i},${j}) `
    }
    console.log(res);
}