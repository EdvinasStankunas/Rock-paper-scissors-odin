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

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "Tie game.";
  }

  if (player === ROCK) {
    if (computer === PAPER) {
      return "Computer wins! Paper beats rock.";
    }

    return "Player wins! Rock beats scissors.";
  }

  if (player === PAPER) {
    if (computer === ROCK) {
      return "Player wins! Paper beats rock.";
    }
    return "Computer wins! Scissors beat paper.";
  }

  if (player === SCISSORS) {
    if (computer === ROCK) {
      return "Computer wins! Rock beats scissors.";
    }
    return "Player wins! Scissors beat paper.";
  }
}
const playerSelection = ROCK;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
