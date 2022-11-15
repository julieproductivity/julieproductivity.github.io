const choices = ["rock", "paper", "scissors"]

function game() {
    //play the game
    for (let i =0; i<5; i++) {
        playRound(i);
    }
     //runs function playRound
} 

function playRound(i){
    //playRounds
    const playerSelection = playerChoice(); /** we put the return value of function playerChoice into a 
    const playerSelection in order to have player's input value to compare in function checkWinner */ 
    const computerSelection = computerChoice(); /** we put the return value of function computerChoice 
    into a const playerSelection in order to have computer's input value to compare in function checkWinner */ 
    computerLog(computerSelection); // logs the computerSelection value 
    checkWinner (playerSelection, computerSelection); /** runs the function checkWinner to run
    the game */
    

}

function playerChoice() {    //get input from playerChoice
    let getPlayer = prompt("Choose between Rock, paper, scissors : ");
    
    if  (getPlayer == null) {
        playerChoice();

    } else { /**"rock" || getInputP == "paper" || getInputP == "scissors")*/
        let getInput = getPlayer.toLowerCase();
        if (getInput == "rock" || getInput == "paper" || getInput == "scissors"){
            console.log("Player choses ", getInput);
            return getInput;
        }
        else {
            console.log("Type ERROR ! Try again")
            playerChoice();
        }
        
        // need to replay function playerChoice and stop the following events 
        // event for cancel also 
    }
    
    }



function computerChoice() {
    //get random choice from computer
return choices[Math.floor(Math.random()*choices.length)] /** can change choices.length to 3 same,  */ 
}


function checkWinner(playerSelection, computerSelection) { /** comparing the values we generated
from functions playerChoice and computerChoice respectively stored 
in const playerSelection and computerSelection */
    if(playerSelection === computerSelection) {
        console.log("Tie!");
    } else if ((playerSelection ==="rock" && computerSelection==="scissors") 
    ||  (playerSelection ==="scissors" && computerSelection==="paper") 
    ||  (playerSelection ==="paper" && computerSelection==="rock")) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
}
function computerLog(computerChoice) { // function used to log the value of function computerChoice()
    console.log("Computer choses:", computerChoice);
}

    game(); // run the function !

/** WHAT I've learned: - you have to call the function to run it ...**/  