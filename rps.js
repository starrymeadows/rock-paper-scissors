// available choices
const choices = ["rock", "paper", "scissors"];
const playerSelection = "rock";
let computerSelection = null;
let gameOutcome;

// game starts

// player selects rock, paper, scissors

// computer randomly selects rock, paper, scissors 

function computerPlay() {
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPlay());
// round is played
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return gameOutcome = "It's a tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return gameOutcome = "You lose! Paper beats rock.";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return gameOutcome = "You lose! Scissors beats paper.";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return gameOutcome = "You lose! Rock beats scissors.";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return gameOutcome = "You win! Rock beats scissors.";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return gameOutcome = "You win! Paper beats rock.";
    } else {
        return gameOutcome = "You win! Scissors beats paper.";
    }  
}



console.log(playRound(playerSelection, computerSelection));

// winner of the round is awarded point 

// game ends when 5 points are reached