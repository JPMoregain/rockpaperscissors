const options = ["rock", "paper", "scissors"];
function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}

  let yourScore = 0;
  let computerScore = 0;
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      }
        else if (playerSelection == "rock" && computerSelection == "paper") {
                computerScore += 1;
                return "You Lose! Paper beats Rock";
          }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerScore += 1;
                return "You Lose! Scissors beats Paper"   
            }  
        else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerScore += 1;
                return "You Lose! Rock beats Scissors" 
            }
        else if (playerSelection == "paper" && computerSelection == "rock") {
                yourScore += 1;    
                return "You Win! Paper beats Rock"
            }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
                yourScore += 1;   
                return "You Win! Scissors beats Paper"
            }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
                yourScore += 1;    
                return "You Win! Rock beats Scissors"
        }      
  }

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let userInput = window.prompt('Please choose from the following: rock, paper, scissors');
        let computerSelection = computerPlay(options);
        let playerSelection = userInput.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your Score = ${yourScore}. Computer Score = ${computerScore}`);
}
}
