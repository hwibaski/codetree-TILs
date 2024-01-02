const fs = require('fs');
const [a, op, b] = fs.readFileSync(0).toString().trim().split(' ');

const n = Number(a);
const m = Number(b);

const selector = {
    '+': () => `${n} ${op} ${m} = ${add(n, m)}`,
    '-': () => `${n} ${op} ${m} = ${sub(n, m)}`,
    '/': () => `${n} ${op} ${m} = ${divide(n, m)}`,
    '*': () => `${n} ${op} ${m} = ${multiply(n, m)}`
}

console.log(selector[op]?.() ?? 'False');

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function divide(a, b) {
    return parseInt(a / b)
}

function multiply(a, b) {
    return a * b;
}