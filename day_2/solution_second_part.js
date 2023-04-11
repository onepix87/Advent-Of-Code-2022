const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

const gameShapes = ['A', 'B', 'C'];
const winTable = {
    'X': 0,
    'Y': 3,
    'Z': 6
}

let totalPoints = 0;

input.split('\n').forEach(round => {
    let [enemyShape, result] = round.split(' ');
    let enemyIndex = gameShapes.findIndex(shape => shape === enemyShape);
    let myShapeIndex = 0;

    switch (result) {
        case 'X':
            myShapeIndex = enemyIndex - 1;
            myShapeIndex = myShapeIndex < 0 ? 2 : myShapeIndex;
            break;
        case 'Y':
            myShapeIndex = enemyIndex;
            break;
        case 'Z':
            myShapeIndex = enemyIndex + 1;
            myShapeIndex = myShapeIndex > 2 ? 0 : myShapeIndex;
            break;
    }

    totalPoints += myShapeIndex + 1;
    totalPoints += winTable[result];
})

console.log(totalPoints);