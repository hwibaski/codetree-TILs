const fs = require('fs');

const [n, ...strList] = fs.readFileSync(0).toString().trim().split('\n');

const sorted = strList.sort();
sorted.forEach(el => {
    console.log(el);
})