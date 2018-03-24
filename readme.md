
## Making a nonsense password generator

Using an online service to generate a memorable password seems like a bit of a security risk, so we were thinking to make one people can use offline. 

Grabbing a bunch of words from a dictionary seemed too simple so i had a look at some other online password generators and the thing that interested me most was using nonsense words which follow similar phoneme frequencies as english words.  See this [Frequency table of English phonemes](https://gist.github.com/sbp/1370065).

That is, they kind of look like they could be english words, but they're not.  Easier to remember than a random string of characters but resiliant to dictionary attacks. 

The best program i found that does this is this [nonsense word generator](http://www.soybomb.com/tricks/words/).  Unfortuanately the source code is not with it, but it works using known average frequencies of phonemes (sounds) in the english language.  Somehow the words I managed to generate using the method below just don't seem as catchy so maybe theres still work to be done.

### Using [n-grams](https://en.wikipedia.org/wiki/N-gram)

I also came across this:  [kchapelier/ngram-word-generator: Word generation based on n-gram models, and a cli utility to generate said models.](https://github.com/kchapelier/ngram-word-generator)  Which seemed to be kind of what i was looking for.  I really like the words they generated from list of french and irish first names!  

However since i wanted as big a word-pool as possible I decided to just grab the english dictionary by doing `aspell dump master > words.txt` and then generated ngrams with `ngram-word-generator words.txt words_wt.json`.

I wrote a script to make the word length vary, and check that the generated words are not actual english words.

Heres some sample output with word length set to between 5 and 10 characters:
```
$ node p.js

creebrasso-swardancers-hamperogue-broadess 

pimpainds-clappille-parding-milkered 

squartighfare-blowsoed-repidelic-aquanishes 

infusilital-hyperstrail-innessy-equerrals 

novermitch-tracterends-snotoming-searny 

joycote-charated-lusterburst-autioney 

aquene-birtwright-narisonent-mitimonso 

linence-ternating-tokayak-goodlin 

herbras-vaccent-gownery-rejigs 

ensabound-edullessnel-precommunin-wakagems
```
Bit of a mouthfull i know.  

We can play around with different word-lists/corpus texts to maybe get some more interesting ones.  

### Next steps:
* Add the ususall password generator features:  Mixed CaSE, numbers, punctuation characters, etc.
* Turn it into a react app and html-ify.
* I would be interested to combine this with something like mixing an adjective-like nonsense word with a noun-like nonsense words, a bit similar to how Debian build names are generated (Vagrant also uses this for giving a catchy name to a virtual machine).

### See also:
* [Javascript | Secrets of the Dark](https://direclown.wordpress.com/tag/javascript/) - a review of some password generators
* [Strong Random Password Generator](http://passwordsgenerator.net/) - Generates a password together with some words to help you remember it
* [securepasswords - npm](https://www.npmjs.com/package/securepasswords) - node module for a password generator which is supposed to create passwords which are easy to type on english and german keyboards
* [Electronic Frontier Foundation wordlists](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) along with an interesting explanation.These wordlists are used by [rempe.us/diceware/#eff](https://www.rempe.us/diceware/#eff)
* [XKPasswd - Secure Memorable Passwords](https://xkpasswd.net/s/) - a password generator with plenty of nice features.
* [Strong Pass - Secure Deterministic Password Generator](https://www.rempe.us/strongpass/) - a password manager, without having to keep any backups. Crazy!
