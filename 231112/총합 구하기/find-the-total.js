const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sumVal = 0;

for (let i = a; i <= b; i++) {
    if (i % 6 === 0 && i % 8 !== 0) {
        sumVal += i;
    }
}

console.log(sumVal);