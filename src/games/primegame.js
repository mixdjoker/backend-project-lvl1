// @ts-check
import {
  getUserAnswer, showUserCorrect,
  commonGameStart,
  getRandomInt,
} from '../index.js';

export const greatText = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} num
 */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let index = 2; index <= num / 2; index += 1) {
    if ((num % index) === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} maxRnd
 */
export const checkUserAnswer = (maxRnd) => {
  const randomNumber = getRandomInt(maxRnd);
  const userAnswerStr = getUserAnswer(randomNumber.toString());

  if ((userAnswerStr === 'yes') && (isPrime(randomNumber) === true)) {
    showUserCorrect();
    return true;
  }

  if ((userAnswerStr === 'no') && (isPrime(randomNumber) === false)) {
    showUserCorrect();
    return true;
  }

  return false;
};

export default () => commonGameStart(greatText, checkUserAnswer);
