const fs = require('fs');
const n = fs.readFileSync(0).toString().trim();

let cnt = 0;
for (let i = 0; i < n; i++) {
    let str = '';
  
    for (let j = 0; j < n; j++) {
        cnt === 9 ? cnt = 1 : cnt++;
        str += cnt;
    }

    console.log(str);
}