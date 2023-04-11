const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

let totalSum = 0;
let typesPriorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let elvesArray = [];

input.split('\n').forEach((backpack, index) => {
    let elvesGroup = elvesArray[Math.floor(index / 3)] ?? [];
    elvesArray[Math.floor(index / 3)] = [...elvesGroup, backpack];
});

elvesArray.forEach(([first, second, third]) => {
    let repeatingChar = first.split('').filter(char => second.includes(char) && third.includes(char))[0];
    totalSum += typesPriorities.indexOf(repeatingChar) + 1;

    console.log(repeatingChar);
});

console.log(totalSum);