// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



//Word.js should only require Letter.js

var LETTER = require("./letter");

//var letter = new LETTER();



var WORD= function (newWord) {

    let word = newWord.toLowerCase();
    let arr = [];
    for(var i = 0; i<word.length; i++){
        let letter = new LETTER(word.charAt(i));
        arr.push(letter);
    }


    this.letters = arr;

    this.getString = function () {
        let s = '';
        for(let i in this.letters){
            s += this.letters[i].returnChar() + ' ';
        }
        return s;
    }

    this.makeGuess = function (char) {
        for(let i in this.letters){
            this.letters[i].checkGuess(char);
        }
    }
    
    this.checkWin = function () {
        let count = 0;
        let win = false;
        for(let i in this.letters){
            if(this.letters[i].guessed){
                count++;
            }
        }

        if(count == this.letters.length) win = true;

        return win;
    }

    
}
module.exports = WORD;