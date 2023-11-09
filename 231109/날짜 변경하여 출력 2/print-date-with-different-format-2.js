const fs = require('fs');

const [m, d, y] = fs.readFileSync(0).toString().split('-');

console.log(y + '.' + m + '.' +  d);