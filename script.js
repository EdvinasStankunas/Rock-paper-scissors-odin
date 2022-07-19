const btnContainer = document.querySelector("#btn-container");

const rockBtn = document.createElement("button");
rockBtn.classList.add("rock-btn");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => {
  game("rock");
});

btnContainer.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.classList.add("paper-btn");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => {
  game("paper");
});

btnContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissors-btn");
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => {
  game("scissors");
});

btnContainer.appendChild(scissorsBtn);

const resultDiv = document.createElement("div");

/*function userPlay(buttonValue) {
  const answer = buttonValue;
  return answer;
}
*/
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
  const player = playerSelection?.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    console.log("Tie game");
    return TIE;
  }

  if (player === ROCK) {
    if (computer === PAPER) {
      console.log("Computer wins! Paper beats rock.");
      return COMPUTER;
    }

    console.log("Player wins! Rock beats scissors.");
    return PLAYER;
  }

  if (player === PAPER) {
    if (computer === ROCK) {
      console.log("Player wins! Paper beats rock.");
      return PLAYER;
    }
    console.log("Computer wins! Scissors beat paper.");
    return COMPUTER;
  }

  if (player === SCISSORS) {
    if (computer === ROCK) {
      console.log("Computer wins! Rock beats scissors.");
      return COMPUTER;
    }
    console.log("Player wins! Scissors beat paper.");
    return PLAYER;
  }
  console.log("Have you checked your spelling?");
}

function game(buttonValue) {
  let user = 0;
  let computer = 0;
  //for (let i = 0; i < 5; i++) {
  const playerSelection = buttonValue;
  const computerSelection = computerPlay();
  const winner = playRound(playerSelection, computerSelection);
  if (winner === PLAYER) {
    user++;
  }
  if (winner === COMPUTER) {
    computer++;
  }
  //}
  console.log(`User: ${user} Computer: ${computer}`);
}

//game();
