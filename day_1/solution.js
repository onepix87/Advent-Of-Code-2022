const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

let max = 0;

input.split('\n').reduce((sum, item) => {
    if (item === '') {
        max = max < sum ? sum : max;
        sum = 0;
    }
    else sum = sum + ~~item;

    return sum;
}, 0);

console.log(max);