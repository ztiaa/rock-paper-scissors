function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 100) % 3;
  switch(computerChoice) {
    case 0:
      computerChoice = 'Rock';
      break;
    case 1:
      computerChoice = 'Paper';
      break;
    case 2:
      computerChoice = 'Scissors';
      break;
  }
  return computerChoice;
}

function playerSelection() {
  
}

console.log(computerPlay());
