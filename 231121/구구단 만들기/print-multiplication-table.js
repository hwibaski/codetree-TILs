const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

for (let i = 1; i < 10; i++) {
    let str = '';
    for (let j = b; j >= a; j--) {
        if (j % 2 !== 0) continue;
        str += `${j} * ${i} = ${j * i}`;
        if (j > a) {
            str += ' / '
        }
    }

    console.log(str);
}