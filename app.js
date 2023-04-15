// Get the elements from the document
const score = document.querySelector(".score");
const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const again = document.querySelector(".again");

// Define the possible choices and outcomes
const choicesArray = ["rock", "paper", "scissors"];
const outcomes = {
  rockpaper: "Computer",
  rockscissors: "Player",
  paperrock: "Player",
  paperscissors: "Computer",
  scissorsrock: "Computer",
  scissorspaper: "Player"
};

// Initialize the scores
let playerScore = 0;
let computerScore = 0;

// Add event listeners to the choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    // Check if the game is already over
    if (playerScore === 5 || computerScore === 5) {
      return;
    }

    // Get the player's choice from the data attribute
    const playerChoice = choice.dataset.choice;

    // Generate a random computer choice
    const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
  
    // Determine the winner based on the choices
    const winner = outcomes[playerChoice + computerChoice];

    // Update the score and result
    if (winner === "Player") {
      playerScore++;
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === "Computer") {
      computerScore++;
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    } else {
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      result.textContent = "It's a tie!";
    }

    // Check if the game is over
    if (playerScore === 5 || computerScore === 5) {
      result.textContent = playerScore > computerScore ? "You win the game!" : "You lost the game!";
    }
  });
});

// Add event listener to the play again button
again.addEventListener("click", () => {
  // Reset the scores and result
  playerScore = 0;
  computerScore = 0;
  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  result.textContent = "Make your choice";
});