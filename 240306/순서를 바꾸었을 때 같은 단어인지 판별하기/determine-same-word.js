const fs = require('fs');

const words = fs.readFileSync(0).toString().trim().split('\n')

const a = words[0];
const b = words[1];

if (a.length !== b.length) {
    console.log('No');
    process.exit(0);
}

const aSorted = a.split('').sort();
const bSorted = b.split('').sort();

// console.log(aSorted);

for (let i = 0; i < aSorted.length; i++) {
    if (aSorted[i] !== bSorted[i]) {
        console.log('No');
        process.exit(0);
    }
}

console.log('Yes');