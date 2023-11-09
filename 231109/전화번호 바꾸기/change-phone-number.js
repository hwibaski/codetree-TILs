const fs = require('fs');

const [_, b, c] = fs.readFileSync(0).toString().trim().split('-');

console.log(`010-${c}-${b}`);