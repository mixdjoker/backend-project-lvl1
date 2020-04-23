// @ts-check
import {
  getUserAnswer, showUserCorrect,
  commonGameStart,
  getRandomInt,
} from '../index.js';

const greatText = 'Find the greatest common divisor of given numbers.';

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
 * @param {number} maxRnd
 */
const checkUserAnswer = (maxRnd) => {
  const firstNumber = getRandomInt(maxRnd);
  const secondNumber = getRandomInt(maxRnd);
  const questionText = `${firstNumber} ${secondNumber}`;
  const userAnswerStr = getUserAnswer(questionText);
  const rightResult = gcd(firstNumber, secondNumber);

  if (Number(userAnswerStr) === rightResult) {
    showUserCorrect();
    return true;
  }
  return false;
};

export default () => commonGameStart(greatText, checkUserAnswer);
