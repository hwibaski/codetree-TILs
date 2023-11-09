const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n').map(el => Number(el));

input.forEach(el => {
    console.log(el.toFixed(3));
})