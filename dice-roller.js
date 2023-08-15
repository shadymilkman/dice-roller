
// // Define Game type
// const gameType = [
//   'vampire',
// ]

// ----- VARIABLES ----- //

// // Define empty array to store dice roll pass/fail threshold
// let diceRollPassFail = [];

// // Define pass/fail threshold based on gameType (if required)
// if (gameType === 'vampire') {
//   diceRollPassFail = 6;
// }

let playerRollsSuccess = Count(playerDiceRollsArray);

// Prompt the user to enter the number of, and type of dice to roll
let argRollDice = prompt('Enter your dice roll (ie: 5d10):');

// Dfines the character used to split the input from argRollDice
let argDiceInputSplit = argRollDice.split('d');

// Define the number of dice to roll (extracted from input)
let argNumberOfDice = Number(argDiceInputSplit[0]);

// Define the type of dice to roll (die sides) (extracted from input)
let argTypeOfDice = Number(argDiceInputSplit[1]);

// Defines an empty array for storing player dice roll data
let playerDiceRollsArray = [];

// Defines an empty array for storing player dice roll hard fail data
let playerRollsHardFails = [];

// Defines an empty array for storing player dice roll tens to be rerolled data
let playerRollsTensReroll = [];

// ----- FUNCTIONS ----- //

// Generates a random number between 1 and n based on the number of dice, and type specified
function rollDice(rollDiceNumber, rollDiceType) {

    // Define an empty array for storing the dice rolls
    let rollDiceArray = [];

    // While 'rollDiceNumber' is greater than '0'
    while (rollDiceNumber > 0) {

        // Assign 'rollDiceResult' the result of a random number between 1 and n (based on the 'rollDiceType' parameter) plus n
        const rollDiceResult = Math.floor(Math.random() * rollDiceType) + 1;

        // Pushes the rusult assigned to 'rollDiceResult' to 'rollDiceArray'
        rollDiceArray.push(rollDiceResult);

        // Subtracts one from 'rollDiceNumber' to iterate the loop
        rollDiceNumber--;
    }

    // Returns the values in the 'rollDiceArray'
    return rollDiceArray;
}

function rerollTens(rerollDiceNumber, rerollDiceType) {

    let rerollTensArray = [];

    while (rerollDiceNumber > 0) {

        const rerollDiceResult = Math.floor(Math.random() * rerollDiceType) + 1;

        rerollTensArray.push(rerollDiceResult);

        rerollDiceNumber--;
    }

    return rerollTensArray;
}

function playerHardFailSubtract(playerRollsSuccess, playerRollsFail) {

    let playerFailsArray = [];

    while (playerRollsFail > 0) {

        const trueSuccessResult = (playerRollsSuccess - playerRollsFail);

        playerFailsArray.push(trueSuccessResult);

        playerRollsFail--;
    }

    return playerFailsArray;
}

// ----- EXECUTION ----- //

playerDiceRollsArray.push(rollDice(argNumberOfDice, argTypeOfDice));
// playerDiceRollsArray = rollDice(argNumberOfDice, argTypeOfDice, loopCount);

// ----- DEBUGGING ----- //

console.log(playerDiceRollsArray);
// modified playerDiceRolls


// ----- MISC ----- //

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