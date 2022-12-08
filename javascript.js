/* eslint-disable default-case */
/* eslint-disable no-alert */
// Random number between 1 and 3 for computer choice
// rock paper or scissors;

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
  playerChoice.toLowerCase();

  if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
    alert('sorry, you have to write "rock", "paper", or "scissors"');
    getPlayerChoice();
  }
}


// Function that will use playerChoice and computerChoice 
// to play a round of the game

function playRound() {
  if (computerChoice === 'rock') {
    switch (playerChoice) {
      case 'rock':
        alert('both chose rock! it\'s a tie!');
        break;
      case 'paper':
        alert('paper beats rock! you win!');
        break;
      case 'scissors':
        alert('rock beats scissors. you lose :(');
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (playerChoice) {
      case 'rock':
        alert('paper beats rock. you lose :(');
        break;
      case 'paper':
        alert('both chose paper! it\'s a tie!');
        break;
      case 'scissors':
        alert('scissors beats paper! you win!');
        break;
    }
  } else {
    switch (playerChoice) {
      case 'rock':
        alert('rock beats scissors! you win!');
        break;
      case 'paper':
        alert('scissors beats paper. you lose :(');
        break;
      case 'scissors':
        alert('both chose scissors! it\'s a tie!');
        break;
    }
  }
}

playRound(getPlayerChoice(), getComputerChoice());