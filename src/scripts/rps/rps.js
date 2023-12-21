const SELECTION = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getComputerChoice() {
  const listSelection = Object.keys(SELECTION);
  const randomChoice = Math.floor(Math.random() * listSelection.length);

  return listSelection[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock || Paper || Scissors").toLowerCase().trim();
  computerSelection = "rock"; //getComputerChoice();

  console.log(`Player: ${playerSelection}`);
  console.log(`Robot: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    console.log("TIES");
    return 0;
  }

  if (SELECTION[playerSelection] === computerSelection) {
    console.log("Your won!");
    return true;
  }

  console.log("Loser!");
  return false;
}

function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i += 1) {
    const resultRound = playRound();

    if (resultRound === 0) {
      continue;
    }

    if (resultRound) {
      playerScore += resultRound;
      continue;
    }

    computerScore += 1;
  }

  if (playerScore === computerScore) {
    return game(1);
  }

  console.log(`playerScore ${playerScore}`);
  console.log(`computerScore ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Human WINNER");
    return;
  }

  if (playerScore < computerScore) {
    console.log("Human LOSER");
    return;
  }
}

game(5);
