const fs = require('fs');

const a = fs.readFileSync(0).toString();


const res = Number(a) + 1.5;
console.log(res.toFixed(2));