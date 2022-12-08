/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable default-case */
/* eslint-disable no-alert */
// Random number between 1 and 3 for computer choice
// rock paper or scissors;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function playerWins() {
  playerScore++;
  console.log(`player score: ${playerScore}  computer score: ${computerScore}`);
}

function computerWins() {
  computerScore++;
  console.log(`player score: ${playerScore}  computer score: ${computerScore}`);
}

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
        console.log(`player score: ${playerScore}  computer score: ${computerScore}`);
        break;
      case 'paper':
        console.log('paper beats rock! you win!');
        playerWins();
        break;
      case 'scissors':
        console.log('rock beats scissors. you lose :(');
        computerWins();
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (playerChoice) {
      case 'rock':
        console.log('paper beats rock. you lose :(');
        computerWins();
        break;
      case 'paper':
        console.log('both chose paper! it\'s a tie!');
        console.log(`player score: ${playerScore}  computer score: ${computerScore}`);
        break;
      case 'scissors':
        console.log('scissors beats paper! you win!');
        playerWins();
        break;
    }
  } else {
    switch (playerChoice) {
      case 'rock':
        console.log('rock beats scissors! you win!');
        playerWins();
        break;
      case 'paper':
        console.log('scissors beats paper. you lose :(');
        computerWins();
        break;
      case 'scissors':
        console.log('both chose scissors! it\'s a tie!');
        console.log(`player score: ${playerScore}  computer score: ${computerScore}`);
        break;
    }
  }
}

// Create a function that calls playRound and updates a score depending
// on the outcome;
// Will keep track until the player or computer score reaches 5;

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    playRound(getPlayerChoice(), getComputerChoice());
  } 
  playerScore === 5 ? alert('you won the game!!! refresh the page to play again') 
  : alert('you lost the game. refresh the page to play again');
}

playGame();
