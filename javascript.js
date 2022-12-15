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
let message = 'Click a Button to Play';
const scoreboard = document.querySelector('.scoreboard');

const playerDisplay = document.createElement('div');
playerDisplay.classList.add('.left');
playerDisplay.textContent = `Player: ${playerScore}`;
scoreboard.appendChild(playerDisplay);

const middleDisplay = document.createElement('div');
middleDisplay.classList.add('.middle');
middleDisplay.textContent = message;
scoreboard.appendChild(middleDisplay);

const computerDisplay = document.createElement('div');
computerDisplay.classList.add('.right');
computerDisplay.textContent = `Computer: ${computerScore}`;
scoreboard.appendChild(computerDisplay);


const buttons = document.querySelectorAll('button');

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

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.className;
    getComputerChoice();
  });
});

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

// function playGame() {
//   while (playerScore < 5 && computerScore < 5) {
//     playRound(getPlayerChoice(), getComputerChoice());
//   } 
//   playerScore === 5 ? alert('you won the game!!! refresh the page to play again') 
//   : alert('you lost the game. refresh the page to play again');
// }

// playGame();
