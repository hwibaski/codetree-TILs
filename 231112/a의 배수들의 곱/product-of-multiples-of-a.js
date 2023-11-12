const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let prod = 1;

for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
        prod *= i;
    }
}

console.log(prod);