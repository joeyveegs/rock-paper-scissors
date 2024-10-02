function getComputerChoice() {
    choice = Math.random()
    if (choice < 0.33) {
        return console.log("rock")
    }
    else if (choice > 0.33 && choice < 0.66) {
        return console.log("paper")
    }
    else
        return console.log("scissors");
}