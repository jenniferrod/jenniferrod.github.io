//  crystal collector game

$(document).ready(function(){

var targetNumber; 
var win = 0;
var loss = 0;
var yourScore = 0;
var images = [
    "assets/images/shell1.png",
    "assets/images/shell2.png",
    "assets/images/shell3.png",
    "assets/images/shell4.png"
];

var msgdiv = $("#message");

var startGame = function () {
    $(".shells").empty();
    targetNumber = Math.floor((Math.random() * 101) + 19); 
    $("#matchThis").html('Target Number: ' + targetNumber);

    //  assign the shells random values 
    for(var i = 0; i < 4; i++) {
    var shellValue = Math.floor((Math.random() * 11) + 1);
    console.log("shell values: " + shellValue); 
    
    //  create the shells
    var shell = $("<img>");
        shell.attr({
            "class": 'shell',
            "data-random": shellValue
        });
    shell.attr("src", images[i]);
    $(".shells").append(shell); 
    }

    $("#total").html("Your Score: " + yourScore);
}

startGame();

//  the game
$(document).on('click', ".shell", function () {
    
    var points = parseInt($(this).attr("data-random"));
    // console.log(typeof points);
    yourScore += points;
    $("#total").html("Your Score: " + yourScore);

    //  winning conditional 
    if (yourScore === targetNumber) {
        win++;
        $("#win").html("Wins: " + win);
        
        yourScore = 0;
        displayMessage("You win!");
        startGame();
    }

    //  losing conditional
    else if (yourScore > targetNumber) {
        loss++;
        $("#loss").html("Losses: " + loss);

        yourScore = 0
        displayMessage("You Lose!");
        startGame();
    }
   
});

//  display, then hide the win/loss message 
function displayMessage(winLoss) {
    msgdiv.html(winLoss).fadeIn();
    setTimeout(function() {
        console.log(msgdiv);
        msgdiv.fadeOut().empty();
    }, 2000);
}

}); 