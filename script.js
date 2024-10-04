function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
        return "rock"
    }
    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getValidHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?\nEnter your choice and press OK:")
    if (humanChoice === null) {
        return
    }
    else if (humanChoice.toLowerCase() == "rock") {
        return "rock"
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return "paper"
    }
    else if (humanChoice.toLowerCase() == "scissors") {
        return "scissors"
    }
    else {
        return flagInvalidHumanChoice()
    }
}

function flagInvalidHumanChoice() {
    alert("Whoops! That didn't work.\nTry entering your choice again...")
    return getValidHumanChoice()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
}

const humanSelection = getValidHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);