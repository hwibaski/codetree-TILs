const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

class Agent {
    constructor(codeName, score) {
        this.codeName = codeName;
        this.score = score;

    }

    print() {
        console.log(`${this.codeName} ${this.score}`)
    }
}

const agentList = [];

for (const el of input) {
    const [codeName, score] = el.split(' ');

    agentList.push(new Agent(codeName, score));
}

const sorted = agentList.sort((a, b) => a.score - b.score);

sorted[0].print();