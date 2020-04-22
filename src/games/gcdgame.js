// @ts-check
import {
  displayString, requestString,
  commonGameStart,
  getRandomInt,
} from '../index.js';

/**
 * @param {number} aNum
 * @param {number} bNum
 */
const gcd = (aNum, bNum) => {
  if (bNum === 0) {
    return aNum;
  }

  return gcd(bNum, aNum % bNum);
};

/**
 * @param {number} firstNum
 * @param {number} secondNum
 */
const getUserAnswer = (firstNum, secondNum) => {
  const queryText = `Question: ${firstNum} ${secondNum}`;
  const promptText = 'Your answer:';

  displayString(queryText);
  const userOutput = requestString(promptText);

  return Number(userOutput);
};

/**
 * @param {number} maxRnd
 */
const checkUserAnswer = (maxRnd) => {
  const firstNumber = getRandomInt(maxRnd);
  const secondNumber = getRandomInt(maxRnd);
  const userNumber = getUserAnswer(firstNumber, secondNumber);
  const rightResult = gcd(firstNumber, secondNumber);
  const correctAnswerText = 'Correct!';

  if (userNumber === rightResult) {
    displayString(correctAnswerText);
    return true;
  }
  return false;
};

const gcdGameStart = () => {
  const greatText = 'Find the greatest common divisor of given numbers.';
  commonGameStart(greatText, checkUserAnswer);
};

export default gcdGameStart;
