function getComputerChoice() {
    compChoice = Math.random()
    if (compChoice < 0.33) {
        return console.log("rock")
    }
    else if (compChoice > 0.33 && choice < 0.66) {
        return console.log("paper")
    }
    else {
        return console.log("scissors");
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Rock, paper or scissors?\nEnter your choice and press OK:");
    if (playerChoice === null) {
        return
    }
    else if (playerChoice.toLowerCase() == "rock") {
        return console.log(playerChoice);
    }
    else if (playerChoice.toLowerCase() == "paper") {
        return console.log(playerChoice);
    }
    else if (playerChoice.toLowerCase() == "scissors") {
        return console.log(playerChoice);
    }
    else {
        return invalidPlayerChoice()
    }
}

function invalidPlayerChoice() {
    alert("Whoops! That didn't work.\nTry entering your choice again...")
    return getHumanChoice()
}