$(document).ready(function () {
    // Start Game

    // Select Rand Letter and Hide it
    var Win = 0;
    var loss = 0;
    var lifes = 10;
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var starter = [Math.floor(Math.random() * letters.length)];
    var chosenLetter = letters[starter];
    console.log("Choose letter" + chosenLetter);
    var lettersguessed = [];

    // store letters guessed and reset game once won or loss;
    function newGame() {
        lifes = 10;
        $(".guessesRemaining").html("GuessesLeft  : " + lifes);
        lettersguessed = [];
        $("#lettersGuessed").html("Letters Guessed  : " + lettersguessed);
        starter = [Math.floor(Math.random() * letters.length)];
        chosenLetter = letters[starter];
        console.log("Choose letter" + chosenLetter);
    }
    // Either add to losses or deduct from lives on keyup
    document.onkeyup = function (event) {
        if (lifes == 0) {
            loss++;
            $(".losses").html("Losses  : " + loss);
            newGame();
        } else {
            lifes--;
            // Display Guesses
            $(".guessesRemaining").html("GuessesLeft  : " + lifes);
        }
        // Only want letters to display. Used "letters" array, which has all caps so used "indexOf" so 
        // system would recognize lower and upper letters pressed
        var guessletter = event.key;
        if (letters.indexOf(guessletter.toUpperCase()) < 0) {
            return;
        }
        // when correct letter is guessed add to wins and restart
        if (guessletter.toUpperCase() == chosenLetter) {

            Win++;
            $(".wins").html("Wins  : " + Win);
            newGame();

        }
        lettersguessed.push(guessletter)
        //console.log(lettersguessed)
        // Display all letters typed
        $("#lettersGuessed").html("Letters Guessed  : " + lettersguessed);
    }

});
