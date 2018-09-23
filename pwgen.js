/*
 * Nonsense word password generator
 *
 *
*/

var makeGenerator = require('ngram-word-generator'),
    ngramModel = require('./words_wt.json'); //generated with the cli utility

var generator = makeGenerator(ngramModel);

//var fs = require('fs');
//var englishWords = fs.readFileSync('words.txt').toString().split("\n");
const englishWords = require('./words.json')

// These are all parameter that could be set using a web form:
var lines = 10;
var wordsPerLine = 4;
var minWordLength = 5;
var maxWordLength = 10;
var seperator = '-';
var probabilityRealWord = 0;


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

var passwlist = '';
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
  passwlist += passw;
  passwlist += '<br>';
}

var divobj = document.getElementById('main');
divobj.innerHTML = passwlist; 
