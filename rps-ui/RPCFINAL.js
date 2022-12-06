
//grab the id to put the choices made 
const playerChoiceDisplay = document.querySelector('#playerChoice')
const computerChoiceDisplay = document.querySelector('#computerChoice')
const resultDisplay = document.querySelector('#resultDisplay')
const btnChoice = document.querySelectorAll('button');
const winnerDisplay = document.querySelector('#winner')
const playerScoreDisplay = document.querySelector('#playerScore')
const computerScoreDisplay = document.querySelector ('#computerScore')
let playerChoice
let computerChoice
let result 
let winner
let tie = 0
let playerWin = 0
let computerWin = 0
let roundWinner

btnChoice.forEach(btn =>btn.addEventListener('click',(e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    randomComputerChoice();
    getResult()
    roundsresult()
   
}))

function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * btnChoice.length) +1;

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice ='paper'
    }
    else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    
} 

function getResult () {
    
    
    if (playerChoice === computerChoice) {
        result = "It's a TIE !"

    }
    else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
            (playerChoice == 'paper'&& computerChoice =='rock') ||
            (playerChoice == 'scissors' && computerChoice == 'rock')) { 
        result = "You WIN!"
        playerWin += 1;
        playerScoreDisplay.innerHTML = playerWin
    }
    else {
        result = "Computer wins ..."
        computerWin += 1;
        computerScoreDisplay.innerHTML = computerWin
    }
    resultDisplay.innerHTML = result
}

function roundsresult() {
    if ((computerWin === 5) && (computerWin > playerWin)){
        roundWinner = "You failed this game, Computer WIN ! PLAY AGAIN !"
        reset();
    }

    else if ((playerWin === 5) && (playerWin > computerWin)){
        roundWinner ="Good job, you WIN ! PLAY AGAIN !"
        reset();
    }

    else {
        roundWinner = ''
    }

    winnerDisplay.innerHTML =roundWinner
}

function reset(){
    
    computerWin = 0;
    playerWin = 0;
    
  }

