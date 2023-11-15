const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n + 1; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (j >= i && j % 2 === 1 || i === 0) {
            str += '* ';
        } else {
            str += '  ';
        }
    }

    console.log(str);
}

//   0 1 2 3 4 5 6  
// 0
// 1
// 2
// 3
// 4
// 5
// 6