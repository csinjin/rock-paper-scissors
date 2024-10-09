const buttonContainer = document.querySelector('#buttonContainer');
const resultText = document.querySelector('#resultText');

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

function playRound(humanChoice, computerChoice){
    console.log("Computer picked: " + computerChoice)

    if (humanChoice === computerChoice) {
        humanScore++
        computerScore++
        resultText.textContent = 'You tied!';
        console.log("You tied!")
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        resultText.textContent = 'You win! Rock beats scissors!';
        console.log("You win! Rock beats scissors!")
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++
        resultText.textContent = 'You lose! Paper beats rock!';
        console.log("You lose! Paper beats rock!")
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++
        resultText.textContent = 'You win! Paper beats rock!';
        console.log("You win! Paper beats rock!")
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++
        resultText.textContent = 'You lose! Scissors beats paper!';
        console.log("You lose! Scissors beats paper!")
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
        resultText.textContent = 'You win! Scissors beats paper!';
        console.log("You win! Scissors beats paper!")
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++
        resultText.textContent = 'You lose! Rock beats scissors!';
        console.log("You lose! Rock beats scissors!")
    }

    if (humanScore === 5 && computerScore < 5){
        resultText.textContent = "You won!";
    }
    else if (humanScore < 5 && computerScore === 5){
        resultText.textContent = "Computer won!";
    }
    else if (humanScore === 5 && computerScore === 5) {
        resultText.textContent = "Game over! You tied!";
    }
}

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id){
        case 'rockButton':
            playRound('rock', getComputerChoice());
            break;
        case 'paperButton':
            playRound('paper', getComputerChoice());
            break;
        case 'scissorsButton':
            playRound('scissors', getComputerChoice());
            break;
    }
});

let humanScore = 0
let computerScore = 0

resultText.textContent = ('Your Score: ' + humanScore + '\nComputer Score: ' + computerScore);
console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore)