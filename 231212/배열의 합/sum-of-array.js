const fs = require('fs');
 const input = fs.readFileSync(0).toString().trim().split('\n');
 

for (const line of input) {
    const arr = line.split(' ').map(Number);
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    console.log(sum);
}