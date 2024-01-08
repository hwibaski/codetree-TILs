const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const temp = findIndexSameWithSecondArrayFirstEl(a, b[0]);

if (temp.length === 0) {
    console.log('No');
    return;
}

let result = true;
let j = 0;

// console.log(temp);

for (const el of temp) {
    if (el > b.length) continue;
    for (let i = el; i < el + b.length; i++) {
        if (!b) {
            result = false;
            break;
        }

        // console.log(a[i], b[j]);
        j++;

        if (!(a[i] === b[j])) {
            // console.log('here', a[i], b[j]);
            result = false;
            break;
        }
    }
}

console.log(result === true ? 'Yes' : 'No');

function findIndexSameWithSecondArrayFirstEl(a, firstElOfB) {
    const index = [];
    const start = a.indexOf(firstElOfB);

    if (start !== -1) {
        index.push(start);
    }

    return index;
}