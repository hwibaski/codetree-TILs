const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let satisfied = true;

for (let i = 0; i < 5; i++) {
    let number = Number(input[i]);
    if (number % 3 !== 0) {
        satisfied = false;
    }
}

if (satisfied === true) {
    console.log(1);
} else {
    console.log(0);
}