const btnContainer = document.querySelector("#btn-container");
const winnerDiv = document.querySelector("#winner-div");

const rockBtn = document.createElement("button");
rockBtn.classList.add("rock-btn");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => {
  if (user === 5) {
    winnerDiv.textContent = "Winner: User";
    return 0;
  }
  if (computer === 5) {
    winnerDiv.textContent = "Winner: Computer";
    return 0;
  }
  game("scissors");
});

btnContainer.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.classList.add("paper-btn");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => {
  if (user === 5) {
    winnerDiv.textContent = "Winner: User";
    return 0;
  }
  if (computer === 5) {
    winnerDiv.textContent = "Winner: Computer";
    return 0;
  }
  game("scissors");
});

btnContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissors-btn");
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => {
  if (user === 5) {
    winnerDiv.textContent = "Winner: User";
    return 0;
  }
  if (computer === 5) {
    winnerDiv.textContent = "Winner: Computer";
    return 0;
  }
  game("scissors");
});

btnContainer.appendChild(scissorsBtn);

const resultDiv = document.querySelector("#result-div");

const scoreDiv = document.querySelector("#score-div");

function computerPlay() {
  const randomNumber = getRandomNumber();

  if (randomNumber === 0) {
    return "Rock";
  }

  if (randomNumber === 1) {
    return "Paper";
  }

  return "Scissors";
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3 + 0);
}

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    resultDiv.textContent = "Tie game";
    return TIE;
  }

  if (player === ROCK) {
    if (computer === PAPER) {
      resultDiv.textContent = "Computer wins! Paper beats rock.";
      return COMPUTER;
    }

    resultDiv.textContent = "Player wins! Rock beats scissors.";
    return PLAYER;
  }

  if (player === PAPER) {
    if (computer === ROCK) {
      resultDiv.textContent = "Player wins! Paper beats rock.";
      return PLAYER;
    }
    resultDiv.textContent = "Computer wins! Scissors beat paper.";
    return COMPUTER;
  }

  if (player === SCISSORS) {
    if (computer === ROCK) {
      resultDiv.textContent = "Computer wins! Rock beats scissors.";
      return COMPUTER;
    }
    resultDiv.textContent = "Player wins! Scissors beat paper.";
    return PLAYER;
  }
}

let user = 0;
let computer = 0;

function game(buttonValue) {
  const playerSelection = buttonValue;
  const computerSelection = computerPlay();
  const winner = playRound(playerSelection, computerSelection);

  if (winner === PLAYER) {
    user++;
  }
  if (winner === COMPUTER) {
    computer++;
  }
  scoreDiv.textContent = `User: ${user} Computer: ${computer}`;
}
