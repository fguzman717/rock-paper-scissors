// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  // Since we are determining what the computer choice will be between 3 possible options we want to create a random number between 1 and 3, inclusive.
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  // Rock Beats Scissors
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Rock beats Scissors!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Rock beats Scissors!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Scissors Beats Paper
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Scissors beats Paper!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Scissors beats Paper!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Paper Beats Rock
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Paper beats Rock!");
    humanScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Paper beats Rock!");
    computerScore += 1;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  // Cases in which there is a draw
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Draw!");
  }
}

const body = document.querySelector("body");
const rpsContainer = document.createElement("div");
body.appendChild(rpsContainer);

// Buttons for human player selection
const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock-selection");
rockButton.textContent = "Rock!";

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper-selection");
paperButton.textContent = "Paper!";

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "scissors-selection");
scissorsButton.textContent = "Scissors!";

rpsContainer.appendChild(rockButton);
rpsContainer.appendChild(paperButton);
rpsContainer.appendChild(scissorsButton);

// Event listeners to call playRound when clicked
const rock = document.querySelector("#rock-selection");
rock.addEventListener("click", () => {
  playRound("rock");
});

const paper = document.querySelector("#paper-selection");
paper.addEventListener("click", () => {
  playRound("paper");
});

const scissors = document.querySelector("#scissors-selection");
scissors.addEventListener("click", () => {
  playRound("scissors");
});

// A score will be tracked for the human player and computer player
let humanScore = 0;
let computerScore = 0;
