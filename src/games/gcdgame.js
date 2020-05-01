// @ts-check
import { getRandomIntSet, startGame } from '../index.js';

const gcd = (aNum, bNum) => {
  if (bNum === 0) {
    return aNum;
  }

  return gcd(bNum, aNum % bNum);
};

const gameLogic = (maxRndNumber) => {
  const commonParams = {
    questionStrings: [],
    rightAnswer: undefined,
  };
  const numbersCount = 2;
  const numbers = getRandomIntSet(numbersCount, maxRndNumber);

  commonParams.questionStrings.push(...numbers);
  commonParams.rightAnswer = gcd(...numbers);

  return commonParams;
};

const greatText = 'Find the greatest common divisor of given numbers.';

export default () => startGame(greatText, gameLogic);
