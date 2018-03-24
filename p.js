/*
 * Nonsense word password generator
 *
 * TODO: test that the words are not actually english words
 *
*/

var makeGenerator = require('ngram-word-generator'),
    ngramModel = require('./words_wt.json'); //generated with the cli utility

var generator = makeGenerator(ngramModel);

var fs = require('fs');

var lines = 10;
var wordsPerLine = 4;
var minWordLength = 5;
var maxWordLength = 10;

var englishWords = fs.readFileSync('words.txt').toString().split("\n");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateWord() {
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
     passw += generateWord();
     if (j < (wordsPerLine -1)) { passw += '-'; }
  }
  console.log(passw, '\n');
}