// game starts

// available choices
const choices = ["Rock", "Paper", "Scissors"];
let playerSelection = null;
let computerSelection = null;

// player selects rock, paper, scissors

// computer randomly selects rock, paper, scissors 

function computerPlay() {
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPlay());
// winner of the round is determined

// winner of the round is awarded point 

// game ends when 5 points are reached