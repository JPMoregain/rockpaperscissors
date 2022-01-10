//determine computer move
const options = ["rock", "paper", "scissors"];
function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}
//determine winner
  const userInput = window.prompt('Please choose from the following: rock, paper, scissors');
  const computerSelection = computerPlay(options);
  const playerSelection = userInput.toLowerCase();
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      }
        else if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                return "You Lose! Paper beats Rock";
          }
        }
        else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                return "You Lose! Scissors beats Paper"   
            }  
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                return "You Lose! Rock beats Scissors" 
            }
        }
        else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                return "You Win! Paper beats Rock"
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                return "You Win! Scissors beats Paper"
            }
        }
        else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                return "You Win! Rock beats Scissors"
            }
        }      
  }
  console.log(playRound(playerSelection, computerSelection));
//declare winner

//loop previous function into a 5 round game that keeps score and reports a winner or loser at the end
