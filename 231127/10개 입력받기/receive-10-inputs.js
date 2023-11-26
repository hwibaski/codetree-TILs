const fs = require('fs');
const input = fs.readFileSync(0).toString().trim(0).split(' ').map(Number);

let sum = 0;
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
        break;
    }

    sum += input[i];
    cnt++;
}

console.log(sum, (sum / cnt).toFixed(1));