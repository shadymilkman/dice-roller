
// // Define Game type
// const gameType = [
//   'vampire',
// ]

// // Define empty array to store dice roll pass/fail threshold
// let diceRollPassFail = [];

// // Dfine pass/fail threshold based on gameTeyp (if required)
// if (gameType === 'vampire') {
//   diceRollPassFail = 6;
// }

// Prompt the user to enter the number of, and which kind of dice to roll
let argRollDice = prompt('Enter your dice roll (Ex: 5d10):');

let argDiceInputSplit = argRollDice.split('d');

// Define the argment for number of dice by (extracted from input)
let argNumberOfDice = Number(argDiceInputSplit[0]);

// Define the type of dice to roll (extracted from input)
let argTypeOfDice = Number(argDiceInputSplit[1]);

// Defines an empty array for storing player dice roll data
let playerDiceRollsArray = [];

// Defines an empty array for storing player dice roll hard fail data
let playerRollsHardFails = [];

// Defines an empty array for storing player dice roll tens to be rerolled data
let playerRollsTensReroll = [];

// Generates a random number between 1 and n based on the number of dice, and type specified
function rollDice(rollDiceNumber, rollDiceType) {

  // Define an empty array for storing the dice rolls
  let rollDiceArray = [];

  // While 'rollDiceNumber' is greater than '0'
  while (rollDiceNumber > 0) {

    // Assign 'rollDiceResult' the result of a random number between 1 and n based on the rollDiceType parameter plus 1
    const rollDiceResult = Math.floor(Math.random() * rollDiceType) + 1;

    // Pushes the rusult assigned to 'rollDiceResult' to 'rollDiceArray'
    rollDiceArray.push(rollDiceResult);

    // Subtracts one from 'rollDiceNumber' to iterate the loop
    rollDiceNumber--;
  }

  // Returns the values in the 'rollDiceArray'
  return rollDiceArray;
}

playerDiceRollsArray.push(rollDice(argNumberOfDice, argTypeOfDice));
// playerDiceRollsArray = rollDice(argNumberOfDice, argTypeOfDice, loopCount);

console.log(playerDiceRollsArray);
// modified playerDiceRolls



// for (const [index, playerDiceRoll] of playerDiceRollsArray.entries()) {
//   if (playerDiceRoll === 1) {
//     playerRollsHardFails.push(playerDiceRoll);
//     console.log(`${index + 1}d${argNumberOfDice} = ${playerDiceRoll} - *HARD FAIL*`);
//   }
//   else if (playerDiceRoll < 6) {
//     console.log(`${index + 1}d${argNumberOfDice} = ${playerDiceRoll} - *FAIL*`);
//   }
//   else if (playerDiceRoll === 10) {
//     playerRollsTensReroll.push(playerDiceRoll);
//     console.log(`${index + 1}d${argNumberOfDice} = ${playerDiceRoll} - *REROLL 10*`);

//   }
//   else {
//     console.log(`${index + 1}d${argNumberOfDice} = ${playerDiceRoll} - *PASS*`);
//   }
// }

// Define pass/fail for D10 based 'Vampire: The Masquerade' game
// for (const [index, playerDiceRoll] of playerDiceRollsArray.entries()) {
//   if (playerDiceRoll < 6) {
//     console.log(`${index + 1}d${argTypeOfDice} ${playerDiceRoll} - FAIL`);
//   }
//   else {
//     console.log(`${index + 1}d${argTypeOfDice} ${playerDiceRoll} - PASS`);
//   }
// }
// console.log(typeof diceRollPassFail);playerDiceRollsArray.filter(playerDiceRoll => playerDiceRoll !== 1)

//  if (playerDiceRoll === 1) {
//   playerRollSubtractiveFails.push(playerDiceRoll);
//   playerDiceRollsArray.push(playerDiceRoll);
// }
// else if (playerDiceRoll === 10) {
//   playerRollTensReroll.push(playerDiceRoll);
//   playerDiceRollsArray.push(playerDiceRoll);
// }
// else {
//   playerDiceRollsArray.push(playerDiceRoll);
// }
// (`${index + 1}d${argNumberOfDice} = ${playerDiceRoll} - *HARD FAIL*`)