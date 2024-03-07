const fs = require('fs');

const lines = fs.readFileSync(0).toString().trim().split('\n');
const [first, ...words] = lines;
const tempInput = first.split(' ');
const k = Number(tempInput[1]);
const t = tempInput[2]

console.log(words.filter(w => w.startsWith(t)).sort()[k - 1]);