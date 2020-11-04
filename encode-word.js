const emojis = require('./emojis.js')

module.exports = encodeWord = word => {
    let result = '';
    for(i in word) {
        for(j in emojis) {
            if(word[i].toLowerCase() == emojis[j].letter) {
                result += emojis[j].symbol;
            }
        }
    }
    return result;
}