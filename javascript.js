// Random number between 1 and 3 for computer choice 
// rock paper or scissors 
let computerChoice;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
}

getComputerChoice();

console.log(computerChoice);
