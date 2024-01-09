const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b] = swap(n, m);

process.stdout.write(`${a} ${b}`);

function swap(a, b) {
    return [b, a];
}