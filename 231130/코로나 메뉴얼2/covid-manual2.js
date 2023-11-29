const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const cntArr = Array(4).fill(0);

for (let i = 0; i < input.length; i++) {
    const [hasPhenomenon, temperature] = input[i].split(' ');
    
    if (hasPhenomenon === 'Y' && temperature >= 37) {
        cntArr[0]++;
    }

    if (hasPhenomenon === 'N' && temperature >= 37) {
        cntArr[1]++;
    }

    if (hasPhenomenon === 'Y' && temperature < 37) {
        cntArr[2]++;
    }

    if (hasPhenomenon === 'N' && temperature < 37) {
        cntArr[3]++;
    }
}

console.log(cntArr.join(' '), cntArr[0] >= 2 ? 'E' : '');