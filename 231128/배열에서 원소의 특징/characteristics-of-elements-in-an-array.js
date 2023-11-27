const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let idx = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        idx = i;
        break;
    }
}

console.log(input[idx - 1]);