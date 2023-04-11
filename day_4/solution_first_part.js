const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input', { encoding: "utf-8" });

let totalCount = 0;

input.split('\n').forEach(bothAssignments => {
    let [firstElf, secondElf] = bothAssignments.split(',');
    let [firstSectionFirst, lastSectionFirst] = firstElf.split('-');
    let [firstSectionSecond, lastSectionSecond] = secondElf.split('-');

    if ((~~firstSectionFirst >= ~~firstSectionSecond && ~~lastSectionFirst <= ~~lastSectionSecond) ||
        (~~firstSectionFirst <= ~~firstSectionSecond && ~~lastSectionFirst >= ~~lastSectionSecond))
        totalCount += 1;
});

console.log(totalCount);