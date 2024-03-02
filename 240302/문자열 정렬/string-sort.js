const fs = require('fs');

const str = fs.readFileSync(0).toString().trim();

const temp = [...str].sort();
console.log(temp.join(''));