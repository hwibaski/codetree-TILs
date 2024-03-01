const fs = require('fs');

const nums = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number);

console.log(sorted(nums, '', (a, b) => a - b));
console.log(sorted(nums, '', (a, b) => b - a));

function sorted(nums, init, sortFunc) {
    const sorted = nums.sort(sortFunc);
    sorted.forEach(el => init += el + ' ');

    return init 
}