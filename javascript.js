let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const scoreboard = document.querySelector('.scoreboard');
const buttons = document.querySelectorAll('button');
const gameMessage = document.querySelector('.game-message');

const message = document.createElement('div');
message.classList.add('message');
gameMessage.appendChild(message);

const playerDisplay = document.createElement('div');
playerDisplay.classList.add('left');
playerDisplay.textContent = `Player: ${playerScore}`;
scoreboard.appendChild(playerDisplay);

const middleDisplay = document.createElement('div');
middleDisplay.classList.add('middle');
middleDisplay.textContent = 'Click a Button to Play';
scoreboard.appendChild(middleDisplay);

const computerDisplay = document.createElement('div');
computerDisplay.classList.add('right');
computerDisplay.textContent = `Computer: ${computerScore}`;
scoreboard.appendChild(computerDisplay);

function playerWins() {
  playerScore++;
  playerDisplay.textContent = `Player: ${playerScore}`;
  scoreboard.appendChild(playerDisplay);
}

function computerWins() {
  computerScore++;
  computerDisplay.textContent = `Computer: ${computerScore}`;
  scoreboard.appendChild(computerDisplay);
}

function messageUpdate(string) {
  message.textContent = string;
  gameMessage.appendChild(message);
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

function winCondition() {
  if (computerScore === 5) {
    messageUpdate('You lost. Better luck next time.');
  } else if (playerScore === 5) {
    messageUpdate('You won!!!');
  }
}

function playRound() {
  if (computerChoice === 'rock') {
    switch (playerChoice) {
      case 'rock':
        messageUpdate('both chose rock! it\'s a tie!');
        winCondition();
        break;
      case 'paper':
        playerWins();
        messageUpdate('paper beats rock! you win!');
        winCondition();
        break;
      case 'scissors':
        computerWins();
        messageUpdate('rock beats scissors. you lose :(');
        winCondition();
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (playerChoice) {
      case 'rock':
        messageUpdate('paper beats rock. you lose :(');
        computerWins();
        winCondition();
        break;
      case 'paper':
        messageUpdate('both chose paper! it\'s a tie!');
        winCondition();
        break;
      case 'scissors':
        playerWins();
        messageUpdate('scissors beats paper! you win!');
        winCondition();
        break;
    }
  } else {
    switch (playerChoice) {
      case 'rock':
        playerWins();
        messageUpdate('rock beats scissors! you win!');
        winCondition();
        break;
      case 'paper':
        computerWins();
        messageUpdate('scissors beats paper. you lose :(');
        winCondition();
        break;
      case 'scissors':
        messageUpdate('both chose scissors! it\'s a tie!');
        winCondition();
        break;
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.className;
    getComputerChoice();
    playRound();
  });
});
