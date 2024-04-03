const fs = require('fs');
const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

const nums = lines[0].split(' ').map(Number);

class Num {
    constructor(val, position) {
        this.val = Number(val);
        this.position = Number(position);
    }

    updatePos(pos) {
        this.position = pos;
    }
}

const origin = nums.map((n, i) => new Num(n, i + 1));

[...origin].sort((a, b) => a.val - b.val)
                            .map((num, i) => {
                                num.updatePos(i + 1);
                                return num;
                            });

console.log(origin.map(el => el.position).join(' '));