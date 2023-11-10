const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

for (let i = 0; i < input; i++) {
    console.log('*');
}