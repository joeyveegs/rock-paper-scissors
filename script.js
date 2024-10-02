function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
        computerChoice = "rock"
    }
    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?\nEnter your choice and press OK:")
    if (humanChoice === null) {
        return
    }
    else if (humanChoice.toLowerCase() == "rock") {
        humanChoice = "rock"
    }
    else if (humanChoice.toLowerCase() == "paper") {
        humanChoice = "paper"
    }
    else if (humanChoice.toLowerCase() == "scissors") {
        humanChoice = "scissors"
    }
    else {
        return invalidhumanChoice()
    }
}

function invalidhumanChoice() {
    alert("Whoops! That didn't work.\nTry entering your choice again...")
    return getHumanChoice()
}

let humanScore = 0;
let computerScore = 0;