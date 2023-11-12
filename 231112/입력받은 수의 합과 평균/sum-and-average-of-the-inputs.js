const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let n = Number(input[0]);
let sumVal = 0;

for (let i = 1; i <= n; i++) {
    sumVal += Number(input[i]);
}

let avg = sumVal / n;

console.log(sumVal, avg.toFixed(1));