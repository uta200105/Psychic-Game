$(document).ready(function()
{
$(document).startGame(function()
{ 
        
    // Array of Words

    var word = ["space", "travel", "star", "planet"];
    
    //Variables
    
    var correct = [];
    var incorrect = [];
    var underScoreA = []
    var underScoreDefault = document.getElementsByClassName("guesses");
    var wrongGuesses = document.getElementsByClassName("lettersGuessed");
    var winCount = 0;

    // Choose random words

    var randomWord = [Math.floor(Math.random() * word.length)];
    var chosenWord = word[randomWord];
   

    // Underscores

    var underscores = () =>
    {
        for (var i = 0; i < chosenWord.length; i++)
    {
    underScoreA.push("_");
    }
    underScoreDefault[0].innerHTML = underScoreA.join("");

    return underScoreA;
    }
   

    // Users Guess

    document.addEventListener ("keypress", event =>
    {
    var keyCode = event.keyCode;
    var codeWord = String.fromCharCode(keyCode);
   

    // Confirm Correct Guess

    // If Right

    if(chosenWord.indexOf(codeWord) > -1)
    {
    correct.push(codeWord);

    // Replace underscore with correct letter

    underScoreA[chosenWord.indexOf(codeWord)] = codeWord

    if(underScoreA.join("")== chosenWord)
    {
    winCount++;
    alert("You Win!");
    }

    document.getElementsByClassName("Wins").innerHTML = winCount;

    // If Wrong

    }
    else 
    {
    incorrect.push(codeWord);
    }

});

});
});
