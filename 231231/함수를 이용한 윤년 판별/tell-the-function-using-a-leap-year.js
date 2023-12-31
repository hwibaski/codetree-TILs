const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(isYunnyeon(input));

function isYunnyeon(n) {
    if ((n % 4 === 0 && n % 100 === 0) && n % 400 === 0) {
        return true;
    } 

    if (n % 4 === 0 && n % 100 === 0) {
        return false;
    }

    if (n % 4 === 0) {
        return true;
    };

    return false;
}