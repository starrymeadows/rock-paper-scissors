// available choices
const choices = ["rock", "paper", "scissors"];
let playerSelection = null;
let computerSelection = null;
let roundOutcome;

// player selects rock, paper, scissors
function playerChoice() {
    playerSelection = window.prompt("Rock, paper, or scissors?");
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
    if (playerSelection === computerSelection) {
        return roundOutcome = "It's a tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return roundOutcome = "You lose! Paper beats rock.";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return roundOutcome = "You lose! Scissors beats paper.";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return roundOutcome = "You lose! Rock beats scissors.";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return roundOutcome = "You win! Rock beats scissors.";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return roundOutcome = "You win! Paper beats rock.";
    } else {
        return roundOutcome = "You win! Scissors beats paper.";
    }  
}

// game starts
function game() {
    let computerScore = 0;
    let playerScore = 0;

    // play five rounds
    for (let i = 0; i < 5; i++) {
        playerChoice();
        computerPlay();
        playRound(playerSelection, computerSelection);
        if (roundOutcome.includes("lose")) {
            computerScore++;
            console.log(roundOutcome);
        } else if (roundOutcome.includes("win")) {
            playerScore++;
            console.log(roundOutcome);
        } else {
            console.log(roundOutcome);
        }
    }

    // announce and determine winner
    if (playerScore > computerScore) {
        console.log(`The score is ${playerScore} to ${computerScore}. You win!`);
    } else if (computerScore > playerScore) {
        console.log(`The score is ${computerScore} to ${playerScore}. You lose!`);
    } else {
        console.log(`The score is ${playerScore} to ${computerScore}. It's a tie?!`)
    }
}

game();