/* eslint-disable consistent-return */
// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from '../randomint.js';

export const greatText = 'What is the result of the expression?';

const getRandomAction = () => {
  const mathCase = {
    0: '+',
    1: '-',
    2: '*',
  };

  const actionCount = 3;
  const selectedAction = getRandomInt(actionCount);
  const selectedSymbol = mathCase[selectedAction];

  return selectedSymbol;
};

/**
 * @param {string} action
 * @param {number} [firstNumber]
 * @param {number} [secondNumber]
 */
const getMathResult = (action, firstNumber, secondNumber) => {
  if (action === '+') return firstNumber + secondNumber;
  if (action === '-') return firstNumber + secondNumber;
  if (action === '*') return firstNumber + secondNumber;
};

/**
 * @param {number} maxRnd
 * @param {string} user
 */
export const checkUserAnswer = (maxRnd, user) => {
  const firstNumber = getRandomInt(maxRnd);
  const secondNumber = getRandomInt(maxRnd);
  const mathSymbol = getRandomAction();
  const mathResult = getMathResult(mathSymbol, firstNumber, secondNumber);

  const queryText = `Question: ${firstNumber} ${mathSymbol} ${secondNumber}`;

  console.log(queryText); // вынести в index.js
  const userAnswer = readlineSync.question('Your answer: '); // вынести в index.js

  if (mathResult === Number(userAnswer)) {
    console.log('Correct!'); // вынести в index.js
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${mathResult.toString()}".`); // вынести в index.js
  console.log(`Let's try again, ${user}!`); // вынести в index.js
  return false;
};
