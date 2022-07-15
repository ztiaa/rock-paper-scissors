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

let computerSelection = computerPlay();
console.log(computerSelection + ' computer');
const pComputerSelection = document.createElement('p');
const divSelections = document.querySelector('.selection-text');
const container = document.querySelector('.container');

pComputerSelection.innerText = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
divSelections.appendChild(pComputerSelection).setAttribute('dir', 'rtl');
pComputerSelection.classList.add('spoiler');

container.addEventListener('click', e => {

    const playerSelection = (e.target.innerText || e.target.alt).toLowerCase(); 
    const pPlayerSelection = document.createElement('p');
    const pResult = document.createElement('p');
    const roundResult = playRound(playerSelection,computerSelection);
    const divResult = document.querySelector('.round-result');

    computerSelection = computerPlay();
    console.log(computerSelection + ' computer');
    pResult.innerText = roundResult;
    pResult.classList.add('temp');
    pPlayerSelection.innerText = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    pComputerSelection.innerText = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  
    divResult.replaceChildren();
    divResult.appendChild(pResult);
    divSelections.replaceChildren();
    divSelections.appendChild(pPlayerSelection);
    divSelections.appendChild(pComputerSelection).classList.add('spoiler');

});


