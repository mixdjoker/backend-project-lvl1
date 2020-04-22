// @ts-check
import {
  getUserAnswer, showUserCorrect,
  commonGameStart,
  getRandomInt,
} from '../index.js';

/**
 * @param {number} num
 */
const isEvenNumber = (num) => ((num % 2) === 0);

/**
 * @param {number} maxRnd
 */
const checkUserAnswer = (maxRnd) => {
  const queryNumber = getRandomInt(maxRnd);
  const userAnswerStr = getUserAnswer(queryNumber.toString());

  if ((userAnswerStr === 'yes') && (isEvenNumber(queryNumber) === true)) {
    showUserCorrect();
    return true;
  }

  if ((userAnswerStr === 'no') && (isEvenNumber(queryNumber) === false)) {
    showUserCorrect();
    return true;
  }

  return false;
};

const parityGameStart = () => {
  const greatText = 'Answer "yes" if the number is even, otherwise answer "no".';
  commonGameStart(greatText, checkUserAnswer);
};

export default parityGameStart;
