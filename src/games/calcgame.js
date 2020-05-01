/* eslint-disable max-len */
// @ts-check

import { getRandomInt, getRandomIntSet, startGame } from '../index.js';

const getMathResult = (action, firstNumber, secondNumber) => {
  let result = 0;
  switch (action) {
    case '+': result = firstNumber + secondNumber;
      break;
    case '-': result = firstNumber - secondNumber;
      break;
    case '*': result = firstNumber * secondNumber;
      break;
    default:
  }

  return result;
};

const gameLogic = (maxRndNumber) => {
  const mathCase = {
    0: '+',
    1: '-',
    2: '*',
  };

  const commonParams = {
    questionStrings: [],
    rightAnswer: undefined,
  };

  const numbers = [];
  const numbersCount = 2;
  const mathSymbol = mathCase[getRandomInt(Object.keys(mathCase).length)];

  const rndNumbesSet = getRandomIntSet(numbersCount, maxRndNumber);
  numbers.push(...rndNumbesSet);
  commonParams.questionStrings.push(numbers[0], mathSymbol, numbers[1]);
  commonParams.rightAnswer = getMathResult(mathSymbol, ...numbers);

  return commonParams;
};

const greatText = 'What is the result of the expression?';

export default () => startGame(greatText, gameLogic);
