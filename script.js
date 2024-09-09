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

let humanScore = 0
let computerScore = 0