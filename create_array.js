// convert a dictionary file to a json array
const fs = require('fs');

var englishWords = fs.readFileSync('words.txt').toString().split("\n")

fs.writeFileSync('./words.json', JSON.stringify(englishWords), 'utf8');
