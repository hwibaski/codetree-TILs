const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const el = input[1].split(' ').map(Number);
const INT_MIN = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n - 1; i++) {
    let maxVal = INT_MIN;
    let maxValIdx = 0;
    for (let j = i + 1; j < n; j++) {
        if (el[j] >= maxVal) {
        
            maxVal = el[j];
            maxValIdx = j;
        } else {
            continue;
        }
    }

    if (el[i] >= maxVal) continue;

    let temp = el[i];
    el[i] = maxVal;
    el[maxValIdx] = temp;
//     console.log('el :', el);
//     console.log('i :', i);
//     console.log('maxVal :', maxVal);
//     console.log('idx :', maxValIdx);
//     console.log();
}

console.log(el[0], el[1]);