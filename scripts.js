// available choices
const choices = ["rock", "paper", "scissors"];
let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
let roundOutcome;

const score = document.querySelector('.score');
const outcome = document.querySelector('.outcome');
const result = document.querySelector('.result');

const rock = document.querySelector('.rock-button');
const paper = document.querySelector('.paper-button');
const scissors = document.querySelector('.scissors-button');


// player selects rock, paper, scissors
rock.addEventListener('click', () => {
    console.log("rock");
    playerSelection = 'rock';
    computerPlay();
    playRound(playerSelection, computerSelection);
    game(roundOutcome);
})

paper.addEventListener('click', () => {
    console.log("paper");
    playerSelection = 'paper';
    computerPlay();
    playRound('paper', computerSelection);
    game(roundOutcome);
})

scissors.addEventListener('click', () => {
    console.log("scissors");
    playerSelection = 'scissors';
    computerPlay();
    playRound('scissors', computerSelection);
    game(roundOutcome);
})

// computer randomly selects rock, paper, scissors 
function computerPlay() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
    return computerSelection;
}

// round is played
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
        default:
            return roundOutcome = `${playerSelection} is not a rock, a paper, or a scissors. :( Null round!`;
    }  
}

// game starts
function game(roundOutcome) {
    if (roundOutcome.includes("lose")) {
        computerScore++;
        roundNumber++;
        outcome.textContent = roundOutcome;
    } else if (roundOutcome.includes("win")) {
        playerScore++;
        roundNumber++;
        outcome.textContent = roundOutcome;
    } else {
        roundNumber++;
        outcome.textContent = roundOutcome;
    }
    
    score.textContent = `The score is ${playerScore} to ${computerScore}.`

    // announce and determine winner
    if (playerScore > computerScore) {
        results.textContent = `The score is ${playerScore} to ${computerScore}. You win!`;
    } else if (computerScore > playerScore) {
        results.textContent = `The score is ${computerScore} to ${playerScore}. You lose!`;
    } else {
        console.log(`The score is ${playerScore} to ${computerScore}. It's a tie?!`)
    }
}