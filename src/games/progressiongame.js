// @ts-check
import {
  getUserAnswer, showUserCorrect,
  commonGameStart,
  getRandomInt,
} from '../index.js';

export const greatText = 'What number is missing in the progression?';

/**
 * @param {number} first
 * @param {number} delta
 * @param {number} length
 */
const getArithmRange = (first, delta, length) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    const element = first + (i * delta);
    arr.push(element);
  }

  return arr;
};

/**
 * @param {any[]} arr
 * @param {number} misElementIndex
 */
const getUserArithmStr = (arr, misElementIndex) => {
  const strArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (i === misElementIndex) {
      strArr.push('..');
    } else {
      strArr.push(element);
    }
  }

  return strArr.join(' ');
};

export const checkUserAnswer = () => {
  const prgLength = 10;
  const maxRandomFirstElement = 10;
  const prgMinDelta = 3;
  const prgMaxDelta = 19;

  const firstElement = getRandomInt(maxRandomFirstElement);
  const prgDelta = getRandomInt(prgMinDelta, prgMaxDelta);
  const prgMisIndex = getRandomInt(0, prgLength - 1);

  const arithmProgres = getArithmRange(firstElement, prgDelta, prgLength);
  const showString = getUserArithmStr(arithmProgres, prgMisIndex);
  const missedElement = arithmProgres[prgMisIndex];
  const userAnswerStr = getUserAnswer(showString);

  if (Number(userAnswerStr) === missedElement) {
    showUserCorrect();
    return true;
  }
  return false;
};

export default () => commonGameStart(greatText, checkUserAnswer);
