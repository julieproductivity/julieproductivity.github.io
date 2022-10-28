        
        
       
              randomPlayer();
              randomComputer();
              
             

        function randomPlayer() {
            let getPlayerInput = prompt("Choose between Rock, paper, scissors : ", "").toLowerCase();
            if (getPlayerInput==="rock" || getPlayerInput==="paper"||getPlayerInput==="scissors") {
            console.log("You chose " + `${getPlayerInput}`);
        }
        else {
            console.log("Error! Enter either: rock, paper or scissors!");
        };
    
        }


            //---computer choice --
      
            function randomComputer() {
                let computerChoice = ["rock", "paper", "scissors"];
                const computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
                console.log("Computer choses " + `${computerSelection}`);
            }
               
            playRound();
                //---- GAME LOGIC
    
            function playRound() {  
    
    
        /** if (getPlayerInput === computerChoice){
           console.log("It's a tie!");
        }
    **/ 
        /** else**/  if (getPlayerInput === "rock" && computerSelection === "paper"){ 
            console.log("You win! Paper beats Paper!");
        }
        
        else if (playerChoices === "rock" && computerSelection === "paper") {
                console.log("You lose! Paper beats Rock");
        }
         
        else if (playerChoices === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats Rock!");
        }
        
        else if (playerChoices === "paper" && computerSelection === "scissors") {
            console.log("You lose! Scissors beat Paper");
        }
    
        else if (playerChoices === "scissors" && computerSelection === "paper") {
            console.log("You win! Scissors beat Paper!");
        }
        else if (playerChoices === "scissors" && computerSelection === "rock") {  
            console.log("You Lose! Rock beats Scissors!");
            }
            

        }
        

        