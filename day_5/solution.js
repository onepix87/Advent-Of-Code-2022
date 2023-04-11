const fs = require('fs');

const initialSetup = [['Z','J','N','W','P','S'],['G','S','T' ],['V','Q','R','L','H'],['V','S','T','D'],['J','M','B','D','T','Z','Q'],['L','Z','C','D','J','T','W','M'],['J','T','G','W','M','P','L'],['H', 'Q', 'F', 'B', 'T', 'M', 'G', 'N'],['W', 'Q', 'B', 'P', 'C', 'G', 'D', 'R']];

console.log(initialSetup.map(column => column.reverse()));

const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

const instructionsRegex = /move\s(\d*)\sfrom\s(\d*)\sto\s(\d*)/;

input.split('\n').forEach(instructions => {
    const [, moveAmount, fromColumn, toColumn] = instructions.match(instructionsRegex);
    // for (let i = 0; i < moveAmount; i += 1) {
    //
    // }
});