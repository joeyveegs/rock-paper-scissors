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
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! You both chose ${computerChoice}.`);
        humanScore++;
        computerScore++;
    }
    else if ((humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    else if ((humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++;
    }
}

function playGame() {
    const humanSelectionRound1 = getValidHumanChoice();
    const computerSelectionRound1 = getComputerChoice();
    playRound(humanSelectionRound1, computerSelectionRound1);
    const humanSelectionRound2 = getValidHumanChoice();
    const computerSelectionRound2 = getComputerChoice();
    playRound(humanSelectionRound2, computerSelectionRound2);
    const humanSelectionRound3 = getValidHumanChoice();
    const computerSelectionRound3 = getComputerChoice();
    playRound(humanSelectionRound3, computerSelectionRound3);
    const humanSelectionRound4 = getValidHumanChoice();
    const computerSelectionRound4 = getComputerChoice();
    playRound(humanSelectionRound4, computerSelectionRound4);
    const humanSelectionRound5 = getValidHumanChoice();
    const computerSelectionRound5 = getComputerChoice();
    playRound(humanSelectionRound5, computerSelectionRound5);
    if (humanScore == computerScore) {
        alert(`The game ended in a tie! You both scored ${computerScore}.`)
    }
    else if (humanScore > computerScore) {
        alert(`You won the game!\nYou scored ${humanScore} and the computer scored ${computerScore}.`)
    }
    else if (humanScore < computerScore) {
        alert(`You lost the game!\nYou scored ${humanScore} and the computer scored ${computerScore}.`)
    }
}

playGame();