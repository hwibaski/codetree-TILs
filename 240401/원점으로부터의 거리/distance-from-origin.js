const fs = require('fs');

const [n, ...lines] = fs.readFileSync(0).toString().trim().split('\n');

class Point {
    constructor(x, y, num) {
        this.x = Number(x);
        this.y = Number(y);
        this.num = num;
    }

    distanceFromZero() {
        return Math.abs(this.x - 0) + Math.abs(this.y - 0);
    }
}

const points = lines.map((line, i) => {
    const [x, y] = line.split(' ');
    return new Point(x, y, i + 1);
})

points
    .sort((a, b) => a.distanceFromZero() - b.distanceFromZero())
    .forEach(p => {
        console.log(p.num);
    });