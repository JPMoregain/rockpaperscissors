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

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
var br = document.createElement('br');

function game1(playRound) {
    if (yourScore >= 5 || computerScore >= 5) {
        return;
    }
    else {
        let computerSelection = computerPlay(options);
        let playerSelection = "rock";
    content.textContent = (playRound(playerSelection, computerSelection));
    content.textContent += (`Your Score = ${yourScore}. Computer Score = ${computerScore}`);
    if (yourScore >= 5) {
        content.textContent += "You win the game!"
    }
    if (computerScore >= 5) {
        content.textContent += "Computer wins the game!"
    }
}
}

function game2(playRound) {
    if (yourScore >= 5 || computerScore >= 5) {
        return;
    }
    else {
    let computerSelection = computerPlay(options);
    let playerSelection = "paper";
content.textContent = (playRound(playerSelection, computerSelection));
content.textContent += (`Your Score = ${yourScore}. Computer Score = ${computerScore}`);
if (yourScore >= 5) {
    content.textContent += "You win the game!"
}
if (computerScore >= 5) {
    content.textContent += "Computer wins the game!"
}
}
}

function game3(playRound) {
    if (yourScore >= 5 || computerScore >= 5) {
        return;
    }
    else {
    let computerSelection = computerPlay(options);
    let playerSelection = "scissors";
    content.textContent = (playRound(playerSelection, computerSelection));
    content.textContent += (`Your Score = ${yourScore}. Computer Score = ${computerScore}`);
    if (yourScore >= 5) {
        content.textContent += "You win the game!"
    }
    if (computerScore >= 5) {
        content.textContent += "Computer wins the game!"
    }
}
}

var btn = document.getElementById("btn");
btn.addEventListener('click', function() {game1(playRound)});

var btn2 = document.getElementById("button2");
btn2.addEventListener('click', function() {game2(playRound)});

var btn3 = document.getElementById("button3");
btn3.addEventListener('click', function() {game3(playRound)});

container.appendChild(content);