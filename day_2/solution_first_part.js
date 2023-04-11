const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

const gameShapes = [['A', 'X'], ['B', 'Y'], ['C', 'Z']];

let totalPoints = 0;

input.split('\n').forEach(round => {
    let [enemy, mine] = round.split(' ');
    let enemyIndex = gameShapes.findIndex(shapes => shapes[0] === enemy) + 1;
    let mineIndex = gameShapes.findIndex(shapes => shapes[1] === mine) + 1;
    totalPoints += mineIndex;

    if (enemyIndex === mineIndex) {
        totalPoints += 3;
    }
    else if (mineIndex - enemyIndex === 1 || mineIndex - enemyIndex === -2) {
        totalPoints += 6;
    }
})

console.log(totalPoints);