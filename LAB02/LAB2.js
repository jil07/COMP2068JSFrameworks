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

 
});




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
        Console.log('Something went Wrong');
    }
  }
  