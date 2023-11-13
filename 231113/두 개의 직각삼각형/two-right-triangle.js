const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    for (let j = 0; j < 2 * i; j++) {
        str += " ";
    }

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    console.log(str);
}