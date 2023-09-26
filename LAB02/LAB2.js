//Using Prompt Package to get the user's choice

const prompt = require('prompt');

prompt.start();

prompt.get(['userChoice'], (err, result) => {
  if (err) {
    console.error('OPPs !! There Is a error occured here : ', err);
    return;
  }

  const userChoice = result.userChoice.toUpperCase();
  const CompChoice = gettingCompChoice();

  console.log(`User selected: ${userChoice}`);
  console.log(`Computer selected: ${CompChoice}`);

 
});




// Function to generate computer selection
function generateComputerSelection() {
    const randomValue = Math.random();
    if (randomValue < 0.35) {
      return 'PAPER';
    } else if (randomValue < 0.68) {
      return 'SCISSORS';
    } else {
      return 'ROCK';
    }
  }
  