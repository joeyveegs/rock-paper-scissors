function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
        return console.log("rock")
    }
    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        return console.log("paper")
    }
    else {
        return console.log("scissors");
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?\nEnter your choice and press OK:");
    if (humanChoice === null) {
        return
    }
    else if (humanChoice.toLowerCase() == "rock") {
        return console.log(humanChoice);
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return console.log(humanChoice);
    }
    else if (humanChoice.toLowerCase() == "scissors") {
        return console.log(humanChoice);
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