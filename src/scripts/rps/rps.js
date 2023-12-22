const SELECTION = {
  rock: ["scissors", "Rock crushes Scissors"],
  paper: ["rock", "Paper covers Rock"],
  scissors: ["paper", "Scissors cuts Paper"],
};

const MAX_SCORE = 5;

const roundHistory = [];

const buttons = document.querySelectorAll('.card__button');
const roundResult = document.querySelector('.round__result');
const roundInfo = document.querySelector('.round__info');
const scorePlayer = document.querySelector('.score__number--player');
const scoreComputer = document.querySelector('.score__number--computer');

let playerScore = 0;
let computerScore = 0;


buttons.forEach(function (button) {
  button.addEventListener('click', playRound);
});


function writeHistory(player, computer, score, result) {
  roundHistory.push({player: player, computer: computer, score: score, result: result });
}


function getComputerChoice() {
  const listSelection = Object.keys(SELECTION);
  const randomChoice = Math.floor(Math.random() * listSelection.length);

  return listSelection[randomChoice];
}


function checkWinner(player, computer) {
  if (player === MAX_SCORE || computer === MAX_SCORE) {
    buttons.forEach(function (button) {
      button.disabled = true;
    })

    if (player > computer) {
      roundResult.textContent = 'player win'
    } else {
      roundResult.textContent = 'computer win'
    }
  }
}

function checkResultRound(player, computer) {

  if (player === computer) {
    return 'draw';
  }
  
  if (SELECTION[player][0] === computer) {
    playerScore += 1;
    checkWinner(playerScore, computerScore);
    return 'won';
  }
  
  if (SELECTION[computer][0] === player) {
    computerScore += 1;
    checkWinner(playerScore, computerScore);
    return 'lost';
  }

}


function playRound(evt) {
  const player = evt.target.getAttribute('data-choice');
  const computer = getComputerChoice();

  const result = checkResultRound(player, computer);
  const score = `${playerScore}:${computerScore}`
  writeHistory(player, computer, score, result);
  console.log(roundHistory);
}

