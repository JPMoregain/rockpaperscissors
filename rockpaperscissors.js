//determine computer move
const options = ["rock", "paper", "scissors"];
function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}
//determine winner
  const playerSelection = window.prompt('Please choose from the following: rock, paper, scissors');
  const computerSelection = computerPlay(options);
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase();
    return "You Lose! " + playerSelection + " beats " + computerSelection;
  }
  console.log(playRound(playerSelection, computerSelection));
//declare winner

//loop previous function into a 5 round game that keeps score and reports a winner or loser at the end
