const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

for (let i = 1; i <= 4; i++) {
    let str = '';
    for (let j = b; j >= a; j--) {
        str += `${j} * ${i * 2} = ${j * i * 2}`;
        if (j > a) {
            str += ' / '
        }
    }

    console.log(str);
}