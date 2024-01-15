const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

print(n);

function print(n) {
    if (n === 0) {
        return 
    }
    console.log('HelloWorld');

    print(n - 1);
}