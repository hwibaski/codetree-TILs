const fs = require('fs');
let [fromHour, fromMin, toHour, toMin] = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let elapsedTime = 0;

while (fromHour !== toHour || fromMin !== toMin) {
    elapsedTime++;
    fromMin++;

    if (fromMin === 60) {
        fromHour++;
        fromMin = 0;
    }
}


console.log(elapsedTime);