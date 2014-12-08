/*

1. Generate a random number
2. Prompt the user to guess a number.
3. Convert the user number into an integer.
4. Check if the user's answer is equal to the random chosen number.
    a) if it is, alert the user and we're done.
    b) otherwise, alert the user that the number is too low and try again
    c) otherwise, alert the user that the number is too high and try again
5. Set a counter allowing user only 5 tries.
6. Once the counter hits 5, alert the user the game is over.
7. Once the game is over (win or lose), display the list of the numbers the user entered during the game.
 */


function theGame() {
    var randomNumber = Math.floor(Math.random() * 10) + 1; // 1
    var userGuess = parseInt(prompt("Guess a number between 1 and 10")); //2 and 3
    var listOfUserGuess = []; // #7 ???

    if (userGuess === randomNumber) {
        alert('Congrats. You guessed the correct number!'); // 4a

    } else if
    (userGuess < randomNumber) {
        parseInt(prompt('Your number is too low. Guess again')); // 4b
    } else {
        parseInt(prompt('Your number is too high. Guess again')); // 4c
    }
}


while (counter < 5) {
    var counter = counter + 1; // 5
    theGame();
}
    if (counter === 5) {
        alert("****** GAME OVER ******* You used up your 5 tries"); //6
    }

/* #7 Arrays ??
function listOfNumbers() {
    var userGuessNumbers =  [ ];
}
*/