console.log(require('fs').readFileSync(__dirname + '/input', { encoding: "utf-8" }).split('\n').reduce((result, item) => (item === '' ? [...result, 0] : (result[result.length - 1] += ~~item) && result), [0]).sort((a,b) => b - a)[0]);