const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el));

let sum = 0;
let cnt = 0;
for (let i = 0; i < input.length; i++) {
    if(input[i] >= 250) {
        break;
    }

    sum += input[i];
    cnt++;
}

console.log(sum, (sum / cnt).toFixed(1));