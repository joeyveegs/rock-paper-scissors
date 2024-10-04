function getComputerChoice() {
    let compInput = Math.random()
    if (compInput < 0.33) {
        return "rock"
    }
    else if (compInput > 0.33 && compInput < 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, paper or scissors?\nEnter your choice and press OK:")
    if (userInput === null) {
        return
    }
    else if (userInput.toLowerCase() == "rock") {
        return "rock"
    }
    else if (userInput.toLowerCase() == "paper") {
        return "paper"
    }
    else if (userInput.toLowerCase() == "scissors") {
        return "scissors"
    }
    else {
        return invalidUserInput()
    }
}

function invalidUserInput() {
    alert("Whoops! That didn't work.\nTry entering your choice again...")
    return getHumanChoice()
}