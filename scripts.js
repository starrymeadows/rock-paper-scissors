// available choices
const choices = ["rock", "paper", "scissors"];
let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
let roundOutcome;

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const outcome = document.querySelector('.outcome');
const results = document.querySelector('.results');
const content = document.querySelector('.content');

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
    
    pScore.textContent = `You: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;

    // announce and determine winner
    if (roundNumber === 5) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        });

        if (playerScore > computerScore) {
            results.textContent = `You've won it all!`;
        } else if (computerScore > playerScore) {
            results.textContent = `You've lost it all!`;
        } else {
            results.textContent = `It's a tie?!`;
        }

        const replay = document.createElement('button');
        replay.textContent = "Play again?";
        replay.addEventListener('click', () => {
            roundNumber = 0;
            playerScore = 0;
            computerScore = 0;
            buttons.forEach((button) => {
                button.disabled = false;
            });

            const text = document.querySelectorAll('p');
            text.forEach((p) => {
                p.textContent = "";
            });
            content.removeChild(replay);
        });

        content.appendChild(replay);
    }
    
}