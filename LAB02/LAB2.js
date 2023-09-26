//Using Prompt Package to get the user's choice

const { Console } = require('console');
const prompt = require('prompt');

prompt.start();

prompt.get(['userChoice'], (err, result) => {
  if (err) {
    console.error('OPPs !! There Is a error occurred here : ', err);
    return;
  }

  const userChoice = result.userChoice.toUpperCase();
  const CompChoice = gettingCompChoice();

  console.log(`User selected: ${userChoice}`);
  console.log(`Computer selected: ${CompChoice}`);

 





// Function to generate computer selection
function gettingCompChoice() {
    const ranValue = Math.random();
    if (ranValue <= 0.34) {
      return 'PAPER';
    } else if (0.35<= ranValue <= 0.68) {
      return 'SCISSORS';
    } else if(0.69 <= ranValue <1){
      return 'ROCK';
    }else{
        console.log('Something went Wrong');
    }
  }
  

  // Determination of the winner of the Game by using if-else fxn

  //Case-1 There is a tie
  if(userChoice === CompChoice){
console.log('Ooo !! its a Tie !! ');
  }

  // Case-2 where Computer Wins

  else if(CompChoice === 'ROCK' && userChoice ==='SCISSORS') {
    console.log(' ONoo ! Computer Wins ! ');
    console.log('  -- better Luck Next Time -- ');
  }

  else if(CompChoice === 'PAPER' && userChoice ==='ROCK') {
    console.log(' ONoo ! Computer Wins ! ');
    console.log('  -- better Luck Next Time -- ');
  }

  else if(CompChoice === 'SCISSORS' && userChoice ==='PAPER') {
    console.log(' ONoo ! Computer Wins ! ');
    console.log('  -- better Luck Next Time -- ');
  }


  // case -3 Where user Wins 

  else {
    console.log(' Hurray !! You Won !!');
    console.log('  -- Congrats ! You Did It -- ');
  }

});
