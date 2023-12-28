const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

printStr(input);


function printStr(n) {
    for (let i = 0; i < n; i++) {
        console.log('12345^&*()_');
    }
}