const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const data = toNBaseArr(n, 10)

let decimal = 0;

data.forEach((el, i) => {
    if (el === 1) {
        decimal += 2 ** i
    }
})

decimal *= 17;

const data2 = toNBaseArr(decimal, 2);

console.log(data2.map(String).reverse().join(''))

function toNBaseArr(n, base) {
    const data = [];
    let num = n;

    while (true) {
        if (num < base) {
            data.push(num);
            break;
        }

        data.push(num % base);
        num = Math.floor(num / base);
    }

    return data;
}