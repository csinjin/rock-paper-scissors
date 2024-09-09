function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        return "rock"
    }
    else if (randomNumber === 1){
        return "paper"
    }
    else if(randomNumber === 2){
        return "scissors"
    }
    else {
        console.log("wtf?")
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()

    return humanChoice
}

function playRound(humanChoice, computerChoice){
    console.log("Computer picked: " + computerChoice)

    if (humanChoice === computerChoice) {
        humanScore++
        computerScore++
        console.log("You tied!")
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        console.log("You win! Rock beats scissors!")
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++
        console.log("You lose! Paper beats rock!")
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++
        console.log("You win! Paper beats rock!")
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++
        console.log("You lose! Scissors beats paper!")
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
        console.log("You win! Scissors beats paper!")
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++
        console.log("You lose! Rock beats scissors!")
    }
}

function playGame() {
    let rounds = 0

    while (rounds < 5) {
        playRound(getHumanChoice(), getComputerChoice())
        rounds++
    }
}

let humanScore = 0
let computerScore = 0

playGame()
console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore)