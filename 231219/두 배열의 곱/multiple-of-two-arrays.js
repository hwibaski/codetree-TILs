const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');

let arr1 = Array(3).fill(0).map(() => Array(3).fill(0));
let arr2 = Array(3).fill(0).map(() => Array(3).fill(0))

for (let i = 0; i < 3; i++) {
    arr1[i] = lines[i].split(' ').map(Number);
}

for (let i = 0; i < 3; i++) {
    arr2[i]= lines[i+4].split(' ').map(Number);
}

for (let i = 0; i < 3; i++) {
    let str = '';
    for (let j = 0; j < 3; j++) {
        str += (arr1[i][j] * arr2[i][j]) + ' ';
    }
    console.log(str);
}