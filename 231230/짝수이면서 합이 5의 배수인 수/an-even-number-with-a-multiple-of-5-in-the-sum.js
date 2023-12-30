const fs = require('fs');
const input = Number(fs.readFileSync(0).toString());

console.log(
    (isFiveMultiple(...input.toString().split('').map(Number)) &&
    isEven(input)) ? 'Yes' : 'No'
    );


function isFiveMultiple(a, b) {
    return (a + b) % 5 === 0;
}

function isEven(n) {
    return n % 2 === 0;
}