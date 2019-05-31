// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly




//Letter.js should not require any other files.



var LETTER = function (char) {

    this.char = char.toLowerCase();
    this.guessed = false;

    this.returnChar = function () {
        if (this.guessed) return this.char;
        else return '_';
    }

    this.checkGuess = function (guess){
        if (guess.toLowerCase() == this.char){
            this.guessed = true;
        }
    }
}
module.exports = LETTER;