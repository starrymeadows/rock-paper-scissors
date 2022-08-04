// game logic
let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;
let roundOutcome = ' ';

// computer randomly selects rock, paper, scissors 
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
    return computerSelection;
}

// round is playeddd
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            return roundOutcome = "It's a tie!";
        case ((playerSelection === "rock") && (computerSelection === "paper")):
        case ((playerSelection === "paper") && (computerSelection === "scissors")):
        case ((playerSelection === "scissors") && (computerSelection === "rock")):
            return roundOutcome = `You lose! ${computerSelection} beats ${playerSelection}.`;
        case ((playerSelection === "rock") && (computerSelection === "scissors")):
        case ((playerSelection === "paper") && (computerSelection === "rock")):
        case ((playerSelection === "scissors") && (computerSelection === "paper")):    
            return roundOutcome = `You win! ${playerSelection} beats ${computerSelection}.`;
    }  
}

function updateScore(roundOutcome) {
    if (roundOutcome.includes("lose")) {
        computerScore++;
        outcome.textContent = roundOutcome;
    } else if (roundOutcome.includes("win")) {
        playerScore++;
        outcome.textContent = roundOutcome;
    } else {
        outcome.textContent = roundOutcome;
    }
    
    pScore.textContent = `You: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}

function isGameOver() {
    return (playerScore === 5 || computerScore === 5);
}

function endGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (playerScore > computerScore) {
        results.textContent = `You've won it all!`;
    } else {
        results.textContent = `You've lost it all!`;
    }

    addReplay();
}

// UI
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const outcome = document.querySelector('.outcome');
const results = document.querySelector('.results');
const content = document.querySelector('.content');

const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button');

const replay = document.createElement('button');
replay.textContent = "Play again?";
replay.addEventListener('click', restartGame);

// player selects rock, paper, scissors
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(choice) {
    playerSelection = choice;
    console.log(playerSelection);
    computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore(roundOutcome);
    if (isGameOver()) {
        endGame();
    }
}

function addReplay() {
    content.appendChild(replay);
}
    
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = false;
    });

    const text = document.querySelectorAll('p');
        text.forEach((p) => {
            p.textContent = "";
        });
        content.removeChild(replay);
}