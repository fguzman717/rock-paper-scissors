// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  // The Math.random method returns a random number that’s greater than or equal to 0 and less than 1.
  // The Math.floor method returns a number rounded down to the nearest whole number
  // Since we are determining what the computer choice will be between 3 possible options we want to create a random number between 1 and 3, inclusive.
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  // Once the number has been generated, we can return the choice by comparing it to the following:
  // If the number is 1 - The choice is Rock
  // If the number is 2 - The choice is Paper
  // If the number is 3 - The choice is Scissors
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Create a new function named getHumanChoice
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// We will need to use the prompt method to get the user's input
function getHumanChoice() {
  return prompt("Please enter rock, paper, or scissors", "Rock");
}

// Create a new function named playRound.
// This function will have two parameters: humanChoice and computerChoice.
function playRound(humanChoice, computerChoice) {
  // The humanChoice parameter will need to be case-insensitive
  // This allows the user to input their choice however they want
  // The .toLowerCase() method will make all of the characters in the user input is to lowercase letters
  let humanChoiceLowered = humanChoice.toLowerCase();
  // Increment the humanScore or computerScore variable based on the round winner.
  // Log a string value representing the round winner

  // Rock Beats Scissors
  if (humanChoiceLowered === "rock" && computerChoice === "scissors") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Rock beats Scissors!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "rock" && humanChoiceLowered === "scissors") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Rock beats Scissors!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Scissors Beats Paper
  if (humanChoiceLowered === "scissors" && computerChoice === "paper") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Scissors beats Paper!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "scissors" && humanChoiceLowered === "paper") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Scissors beats Paper!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Paper Beats Rock
  if (humanChoiceLowered === "paper" && computerChoice === "rock") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Paper beats Rock!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "paper" && humanChoiceLowered === "rock") {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Paper beats Rock!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Cases in which there is a draw
  if (
    (humanChoiceLowered === "rock" && computerChoice === "rock") ||
    (humanChoiceLowered === "paper" && computerChoice === "paper") ||
    (humanChoiceLowered === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Human Choice: ", humanChoiceLowered);
    console.log("Computer Choice: ", computerChoice);
    console.log("Draw!");
  }
}

// Create a new function named playGame
// Play 5 rounds by calling playRound 5 times
function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  return console.log(
    "Final Score: ",
    "\n",
    "Human Score --->",
    humanScore,
    "\n",
    "Computer Score ---> ",
    computerScore
  );
}

// A score will be tracked for the human player and computer player
let humanScore = 0;
let computerScore = 0;

playGame();
