const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

let totalSum = 0;
let typesPriorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

input.split('\n').forEach(bothCompartments => {
    let firstCompartment = bothCompartments.slice(0, bothCompartments.length / 2);
    let secondCompartment = bothCompartments.slice(bothCompartments.length / 2, bothCompartments.length);
    let repeatingChar = firstCompartment.split('').filter(char => secondCompartment.includes(char))[0];

    totalSum += typesPriorities.indexOf(repeatingChar) + 1;
});

console.log(totalSum);