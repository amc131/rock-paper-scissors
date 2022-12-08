/* eslint-disable default-case */
/* eslint-disable no-alert */
// Random number between 1 and 3 for computer choice
// rock paper or scissors;

let computerChoice;
let playerChoice;

let playerScore = 0;
let computerScore = 0;


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
// Makes sure that the prompt is not case sensitive
// Will make alert if the input does not match one of the 
// game options and will re-call itself after;

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
        console.log('both chose rock! it\'s a tie!');
        break;
      case 'paper':
        console.log('paper beats rock! you win!');
        break;
      case 'scissors':
        console.log('rock beats scissors. you lose :(');
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (playerChoice) {
      case 'rock':
        console.log('paper beats rock. you lose :(');
        break;
      case 'paper':
        console.log('both chose paper! it\'s a tie!');
        break;
      case 'scissors':
        console.log('scissors beats paper! you win!');
        break;
    }
  } else {
    switch (playerChoice) {
      case 'rock':
        console.log('rock beats scissors! you win!');
        break;
      case 'paper':
        console.log('scissors beats paper. you lose :(');
        break;
      case 'scissors':
        console.log('both chose scissors! it\'s a tie!');
        break;
    }
  }
}

// Create a function that calls playRound and updates a score depending
// on the outcome;
// Will keep track until the player or computer score reaches 5;

function playGame() {
  do {
    playRound(getPlayerChoice(), getComputerChoice());
  } while (playerChoice < 5 || computerChoice < 5);
}

playGame();
