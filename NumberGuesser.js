let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generates a randome number that will be used as a target
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//finds the closer number between the user's and the computer's guesses to the target
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  let userDist = Math.abs(userGuess - secretTarget);
  let computerDist = Math.abs(computerGuess - secretTarget);
  if (computerDist < userDist) {
    return false;
  }
  return true;
};

//updates the score of the winner
const updateScore = winner => {
  if (winner === 'computer') {
    computerScore += 1;
  }
  humanScore +=1;
};

//updates the round number
const advanceRound = () => {
  currentRoundNumber += 1;
};
