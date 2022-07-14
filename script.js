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

const computerSelection = computerPlay();
console.log(computerSelection);

document.addEventListener('click', e => {

  if(e.path.length === 7) {
    playerSelection = e.path[1].id;
    console.log(playRound(playerSelection,computerSelection));
  }
  else return;
});

