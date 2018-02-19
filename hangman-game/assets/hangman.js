
//Global Variables
var wordBank = [
    "texas", 
    "howdy", 
    "austin", 
    "boots", 
    "whataburger",
    "galveston",
    "rodeo",  
    ];

var winCount = 0;
var losses = 0;
var wrongLetter = [];
var guessLeft = 5;
var underScores = [];
var userGuess = [];
var randWord = [];

function startGame(){
    //choose a random word from the wordBank to guess
    randWord =  wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("current word: " + randWord);

    for(var i = 0; i < randWord.length; i++) {
        underScores.push("_");
    }
    //Prints underscores to screen
    document.getElementById("currentWord").textContent = underScores.join(" ");
    
    
}

//When to end the game
function winOrLose() {
    if (winCount === randWord.length) {
        alert("Winner winner!")
        console.log("# of wins " + winCount);
        
    }
    else if (guessLeft === 0) {
        alert("Ahh... You lost. Try Again!")
    }

}

//track user guesses
document.onkeyup = function(event) {
    userGuess = event.key;

    // looking for correct guess of letters
    if(randWord.indexOf(userGuess) > -1) {
        
        for(var i = 0; i < randWord.length; i++) {
            if(randWord[i] === userGuess) {
                underScores[i] = userGuess;
                console.log(underScores);

                winCount++;
                //print to screen
                winOrLose();
            }
        //print to screen
        document.getElementById("currentWord").textContent = underScores.join(" ");
        }
    }

    else {
    wrongLetter.push(userGuess);
    console.log("Wrong Guess: " + wrongLetter);
    document.getElementById("wrongLetters").textContent = wrongLetter.join(" ");  
    guessLeft--;
    console.log("Remaining Guesses " + guessLeft);
    //HTML
    document.getElementById("guessLeft").textContent = guessLeft;
    winOrLose();
    }
}

//Play game
startGame();
