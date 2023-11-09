const fs = require('fs');

const a = fs.readFileSync(0).toString();
console.log((a * 2) + 3);