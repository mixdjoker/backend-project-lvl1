// @ts-check
import { getRandomInt, startGame } from '../index.js';

const greatText = 'Answer "yes" if the number is prime, otherwise answer "no".';

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

const gameLogic = (maxRndNumber) => {
  const commonParams = {
    questionElements: [],
    rightAnswer: undefined,
  };

  const number = getRandomInt(maxRndNumber);
  commonParams.questionElements.push(number);
  commonParams.rightAnswer = (isPrime(number)) ? 'yes' : 'no';

  return commonParams;
};

export default () => startGame(greatText, gameLogic);
