/* eslint-disable consistent-return */
// @ts-check
import {
  displayString, requestString,
  startGameGreeting, endGame, engineGame,
  getRandomInt,
} from '../index.js';

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
  if (action === '-') return firstNumber - secondNumber;
  if (action === '*') return firstNumber * secondNumber;
};

/**
 * @param {number} maxRnd
 * @param {string} user
 */
const checkUserAnswer = (maxRnd, user) => {
  const firstNumber = getRandomInt(maxRnd);
  const secondNumber = getRandomInt(maxRnd);
  const mathSymbol = getRandomAction();
  const mathResult = getMathResult(mathSymbol, firstNumber, secondNumber);

  const queryText = `Question: ${firstNumber} ${mathSymbol} ${secondNumber}`;
  const promptText = 'Your answer:';
  const correctAnswerText = 'Correct!';
  const wrongAnswerText = `Let's try again, ${user}!`;

  displayString(queryText);
  const userAnswer = requestString(promptText);

  if (mathResult === Number(userAnswer)) {
    displayString(correctAnswerText);
    return true;
  }

  const compareUserAnswerText = `"${userAnswer}" is wrong answer ;(. Correct answer was "${mathResult.toString()}".`;
  displayString(compareUserAnswerText);
  displayString(wrongAnswerText);
  return false;
};

const calcGameStart = () => {
  const greatText = 'What is the result of the expression?';
  const user = startGameGreeting();
  engineGame(greatText, checkUserAnswer, user);
  endGame(user);
};

export default calcGameStart;
