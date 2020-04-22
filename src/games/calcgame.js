/* eslint-disable consistent-return */
// @ts-check
import {
  getUserAnswer, showUserCorrect, showUserWrong,
  commonGameStart,
  getRandomInt,
} from '../index.js';

const greatText = 'What is the result of the expression?';

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
  const questionText = `${firstNumber} ${mathSymbol} ${secondNumber}`;

  const userAnswer = getUserAnswer(questionText);

  if (mathResult === Number(userAnswer)) {
    showUserCorrect();
    return true;
  }

  showUserWrong(user, userAnswer, mathResult);
  return false;
};

export default () => commonGameStart(greatText, checkUserAnswer);
