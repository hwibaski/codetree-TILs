const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let sumVal = 0;

for (let i = n; i <= 100; i++) {
    sumVal += i;
}

console.log(sumVal);