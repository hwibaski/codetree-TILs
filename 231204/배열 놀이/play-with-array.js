const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);
const elems = input[1].split(' ').map(Number);
// console.log(input);
// console.log(q);
for (let i = 0; i < q; i++) {
    // console.log(input)
    // console.log(i);
    // console.log(input[i + 2]);
    const input2 = input[i + 2].split(' ').map(Number);
    
    // console.log(input2);

    if (input2[0] === 1) {
        // console.log('input2[1]:',input2[1])
        // console.log('elems:',elems[input2[1]]);
        console.log(elems[input2[1] - 1]);
    }

    if (input2[0] === 2) {
        const isPresent = elems.includes(input2[1]);
        
        if (isPresent) {
            console.log(elems.indexOf(input2[1]) + 1);
        } else {
            console.log(0);
        }
    }

    if (input2[0] === 3) {
        const a = input2[1];
        const b = input2[2];

        let str = '';
        for (let j = a; j <= b; j++) {
            str += elems[j - 1] + ' ';
        }
        console.log(str);
    }

}