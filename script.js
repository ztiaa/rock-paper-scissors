function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 100) % 3;
  switch(computerSelection) {
    case 0:
      computerSelection = 'rock';
      break;
    case 1:
      computerSelection = 'paper';
      break;
    case 2:
      computerSelection = 'scissors';
      break;
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === 'rock'){
    if (computerSelection === 'rock') return 'Draw!';
    else if (computerSelection === 'paper') return 'You lose!';
    else if (computerSelection === 'scissors') return 'You win!';
  }
  else if(playerSelection === 'paper'){
    if (computerSelection === 'rock') return 'You win!';
    else if (computerSelection === 'paper') return 'Draw!';
    else if(computerSelection === 'scissors') return 'You lose!';
  }
  else if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') return 'You lose!';
    else if (computerSelection === 'paper') return 'You win!';
    else if (computerSelection === 'scissors') return 'Draw!';
  }
  
}

function game() {
  for (let i = 0; i<5; i++) {
    let result = playRound(prompt('Type "ROCK", "PAPER" or "SCISSORS"').toLowerCase(),computerPlay());
    console.log(result);
  } 
}

game();
