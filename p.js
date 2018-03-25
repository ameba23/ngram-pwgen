/*
 * Nonsense word password generator
 *
 *
*/

var makeGenerator = require('ngram-word-generator'),
    ngramModel = require('./words_wt.json'); //generated with the cli utility

var generator = makeGenerator(ngramModel);

var fs = require('fs');

// These are all parameter that could be set using a web form:
var lines = 10;
var wordsPerLine = 4;
var minWordLength = 5;
var maxWordLength = 10;
var seperator = '-';
var probabilityRealWord = 0;

// Create an array of the english words (is this too memory intensive?)
var englishWords = fs.readFileSync('words.txt').toString().split("\n");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRealWord() {
  return englishWords[getRandomInt(0, englishWords.length - 1)];
}

function generateNonsenceWord() {
  // test that the words generated do not exist in the dictionary
  do {
    newWord = generator(getRandomInt(minWordLength, maxWordLength));
  }
  while (englishWords.indexOf(newWord) < -1);
  return newWord;
}


for (i = 0; i < lines; i++) {
  passw = '';
  for (j = 0; j < wordsPerLine; j++) {
     if (Math.random() > probabilityRealWord) {
       passw += generateNonsenceWord();
     } else {
       passw += generateRealWord();
     }
     if (j < (wordsPerLine -1)) { passw += seperator; }
  }
  console.log(passw, '\n');
}
