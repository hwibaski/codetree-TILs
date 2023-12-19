const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
const arr2 = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 1; i <= n; i++) {
    line = input[i].split(' ').map(Number);
    for (let j = 0; j < m; j++) {
        arr1[i - 1][j] = line[j];
    }
}

for (let i = n + 1; i <= 2 * n; i++) {
    line = input[i].split(' ').map(Number);
    for (let j = 0; j < m; j++) {
        arr2[i - n - 1][j] = line[j];
    }
}


for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            str += 0 + ' ';
        } else {
            str += 1 + ' ';
        }
    }

    console.log(str);
}