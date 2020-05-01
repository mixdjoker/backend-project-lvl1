// @ts-check
import { getRandomInt, startGame } from '../index.js';

const greatText = 'What number is missing in the progression?';

const getArithmRange = (first, delta, length) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    const element = first + (i * delta);
    arr.push(element);
  }

  return arr;
};

const getQuestionElements = (arr, misElementIndex) => {
  const elements = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (i === misElementIndex) {
      elements.push('..');
    } else {
      elements.push(element);
    }
  }

  return elements;
};

const gameLogic = () => {
  const commonParams = {
    questionElements: [],
    rightAnswer: undefined,
  };

  const prgLength = 10;
  const maxRandomFirstElement = 10;
  const prgMinDelta = 3;
  const prgMaxDelta = 19;

  const firstElement = getRandomInt(maxRandomFirstElement);
  const prgDelta = getRandomInt(prgMinDelta, prgMaxDelta);
  const prgMisIndex = getRandomInt(0, prgLength - 1);

  const arithmProgres = getArithmRange(firstElement, prgDelta, prgLength);
  commonParams.questionElements = [...getQuestionElements(arithmProgres, prgMisIndex)];
  commonParams.rightAnswer = arithmProgres[prgMisIndex];

  return commonParams;
};

export default () => startGame(greatText, gameLogic);
