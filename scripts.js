// available choices
const choices = ["rock", "paper", "scissors"];
let playerSelection = null;
let computerSelection = null;
let roundOutcome;

// player selects rock, paper, scissors
function playerChoice() {
    playerSelection = window.prompt("Rock, paper, or scissors?");
    if (playerSelection === null) {
        console.log(`I guess the only real way to win is not to play...`);
        return;
    }
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

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
function game() {
    let computerScore = 0;
    let playerScore = 0;


    // announce and determine winner
    if (playerScore > computerScore) {
        console.log(`The score is ${playerScore} to ${computerScore}. You win!`);
    } else if (computerScore > playerScore) {
        console.log(`The score is ${computerScore} to ${playerScore}. You lose!`);
    } else if (playerSelection === null) {
        console.log("... but seriously, you're too good for roshambo?");
    } else if (computerScore === 0 && playerScore === 0) {
        console.log(`The score is... 0??? What was even the point...`);
    } else {
        console.log(`The score is ${playerScore} to ${computerScore}. It's a tie?!`)
    }
}

game();