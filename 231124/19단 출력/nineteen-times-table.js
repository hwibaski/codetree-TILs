const n = 20;

let str = '';
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (j % 2 === 0 || j === 19) {
            str += `${i} * ${j} = ${i * j}\n`;
        } else {
            str += `${i} * ${j} = ${i * j} / `;
        } 
    }
}

console.log(str);