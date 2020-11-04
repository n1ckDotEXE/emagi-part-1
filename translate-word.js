const emojis = require('./emojis.js')

module.exports = translateWord = word => {
    for(x in emojis) {
        if(word.toLowerCase() == emojis[x].name) {
            return emojis[x].symbol;
        }
    }
    return word;
}