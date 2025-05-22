// A score will be tracked for the human player and computer player
let humanScore = 0;
let computerScore = 0;

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
    roundDetails.textContent = "Rock Beats Scissors!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    roundDetails.textContent = "Rock Beats Scissors!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    computerScore += 1;
  }

  // Scissors Beats Paper
  if (humanChoice === "scissors" && computerChoice === "paper") {
    roundDetails.textContent = "Scissors Beats Paper!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    humanScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    roundDetails.textContent = "Scissors Beats Paper!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    computerScore += 1;
  }

  // Paper Beats Rock
  if (humanChoice === "paper" && computerChoice === "rock") {
    roundDetails.textContent = "Paper Beats Rock!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    roundDetails.textContent = "Paper Beats Rock!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    computerScore += 1;
  }

  // Cases in which there is a draw
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    roundDetails.textContent = "Draw!";
    displayHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
  }

  humanScoreResults.textContent = `Human Score: ${humanScore}`;
  computerScoreResults.textContent = `Computer Score: ${computerScore}`;

  // This will determine the winner, display the final score, and reset for the next game
  if (humanScore === 5) {
    roundDetails.textContent = "Game Over! Human Player Wins!";
    displayHumanChoice.textContent = " ";
    displayComputerChoice.textContent = " ";
    humanScore = 0;
    computerScore = 0;
    return { humanScore, computerScore };
  } else if (computerScore === 5) {
    roundDetails.textContent = "Game Over! Computer Player Wins!";
    displayHumanChoice.textContent = " ";
    displayComputerChoice.textContent = " ";
    humanScore = 0;
    computerScore = 0;
  }
}

// UI Setup
const body = document.querySelector("body");

const rpsContainer = document.createElement("div");
rpsContainer.setAttribute("id", "rpsContainer");

const results = document.createElement("div");
results.setAttribute("id", "results");

const roundDetails = document.createElement("h3");
roundDetails.classList.add("game-score");
roundDetails.textContent = "Let the games begin!";

const displayHumanChoice = document.createElement("h3");
displayHumanChoice.classList.add("game-score");
displayHumanChoice.textContent = "";

const displayComputerChoice = document.createElement("h3");
displayComputerChoice.classList.add("game-score");
displayComputerChoice.textContent = "";

const humanScoreResults = document.createElement("h3");
humanScoreResults.classList.add("game-score");
humanScoreResults.textContent = `Human Score: ${humanScore}`;

const computerScoreResults = document.createElement("h3");
computerScoreResults.classList.add("game-score");
computerScoreResults.textContent = `Computer Score: ${computerScore}`;

results.appendChild(roundDetails);
results.appendChild(displayHumanChoice);
results.appendChild(displayComputerChoice);
results.appendChild(humanScoreResults);
results.appendChild(computerScoreResults);
body.appendChild(rpsContainer);
body.appendChild(results);

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
