const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const [n, a, b] = input.split('\n');

const N = Number(n);
const A = a.trim().split(' ').map(Number);
const B = b.trim().split(' ').map(Number);

const aSorted = sorted(A);
const bSorted = sorted(B);

for (let i = 0; i < N; i++) {
    if (aSorted[i] !== bSorted[i]) {
        console.log('No');
        return;
    }
}

console.log('Yes');

function sorted(nums) {
    const sort = nums.sort((a, b) => a - b);
    return sort;
}