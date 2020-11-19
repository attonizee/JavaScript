//Declare function for user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
  } else {
      console.log('Wrong input!');
  }
  };
  
  //Function for computer to make choice
  function getComputerChoice() {
    const getChoice = Math.floor(Math.random() * 3);
    let computerChoice = '';
  
    switch(getChoice) {
      case 0:
        computerChoice = 'rock';
        break;
      case 1:
        computerChoice = 'paper';
        break;
      case 2:
        computerChoice = 'scissors';
        break;
    } return computerChoice;  
  };
  
  //Function with logic to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game was tie';
    } else if (userChoice === 'bomb') {
      return 'User cheating and win the game!';
    }
    if (userChoice === 'rock' ) {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    };
  
  //Function for play and get the winner
  function playGame() {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`User dropped ${userChoice} and computer dropped ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();