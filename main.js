const encodeWord = require('./encode-word.js')

let words = process.argv.slice(2);

result = words => {
    return words.map(encodeWord).join(' ');
}

console.log(result(words));