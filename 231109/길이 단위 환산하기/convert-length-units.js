const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

const feet = 30.48;

const re = (input * feet).toFixed(1);
console.log(re);