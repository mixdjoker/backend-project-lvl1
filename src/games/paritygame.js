// @ts-check
import { getRandomInt, startGame } from '../index.js';

const greatText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => ((num % 2) === 0);

const gameLogic = (maxRndNumber) => {
  const commonParams = {
    questionStrings: [],
    rightAnswer: undefined,
  };

  const number = getRandomInt(maxRndNumber);
  commonParams.questionStrings.push(number);
  commonParams.rightAnswer = (isEvenNumber(number)) ? 'yes' : 'no';

  return commonParams;
};

export default () => startGame(greatText, gameLogic);
