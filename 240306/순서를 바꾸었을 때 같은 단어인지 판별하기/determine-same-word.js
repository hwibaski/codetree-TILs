const fs = require('fs');

const words = fs.readFileSync(0).toString().trim().split('\n')

const a = words[0];
const b = words[1];

if (a.length !== b.length) {
    console.log('No');
    process.exit(0);
}

const aSorted = a.split('').sort().join();
const bSorted = b.split('').sort().join();

if (aSorted !== bSorted) {
    console.log('No');
    process.exit(0);
} else {
    console.log('Yes');
}