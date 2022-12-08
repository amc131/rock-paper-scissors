// Random number between 1 and 3 for computer choice 
// rock paper or scissors 
let computerChoice;
let playerChoice;

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

// Uses a prompt to get the player choice;
// Todo: Make sure player input is a string and it matches
// one of the three possible choices!!!!

function getPlayerChoice() {
  playerChoice = prompt('choose rock, paper, or scissors :)');
}

getComputerChoice();
getPlayerChoice();

// Function that will use playerChoice and computerChoice 
// to play a round of the game

function playRound(computerChoice, playerChoice) {
  if (computerChoice === 'rock') {
    switch (playerChoice) {
      case 'rock':
        alert('both chose rock! it\'s a tie!)
        break;
      case 'paper':
        alert('paper beats rock! you win!')
    }
  }
}


