// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var WORD = require("./word");
var inquirer = require("inquirer");

let wordArr = ['galaxy', 
    'pirate',
    'artichoke',
    'pinata'
];

let rand = Math.floor(Math.random() * wordArr.length);

var word = new WORD(wordArr[rand]);

console.log(word.getString());
playRound(word);




function playRound(word) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter ('done' to quit) ",
                name: "guess"
            }
        ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.guess !== 'done'){
                let char = inquirerResponse.guess.charAt(0);
                word.makeGuess(char);
                console.log(word.getString());
                if (word.checkWin()){
                    newGame();
                }
                else{
                    playRound(word);
                }
            }
            else console.log('Thanks for playing!')
            
        });
}


function newGame(){
     rand = Math.floor(Math.random() * wordArr.length);

     word = new WORD(wordArr[rand]);

    console.log(word.getString());

    playRound(word);
}