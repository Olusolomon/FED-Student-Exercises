const readline = require("readline-sync");

function guessNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("\n");
  let userGuess = readline.question("Guess a number between 1 and 10: \n");

  while (parseInt(userGuess) !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      userGuess = readline.question("Too high! Guess again: \n");
    } else {
      userGuess = readline.question("Too low! Guess again: \n");
    }
  }

  console.log(
    "Well done! You guessed the number " + randomNumber + " correctly!"
  );
}

guessNumber();
