// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from './randomint.js';

export const greatText = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} inputNumber
 */
const checkParity = (inputNumber) => ((inputNumber % 2) === 0);

/**
 * @param {number} inputNumber
 * @param {boolean} userChoise
 */
const getCorrectAnswer = (inputNumber, userChoise) => {
  let returnValue = false;
  if (checkParity(inputNumber) === userChoise) {
    returnValue = true;
    console.log('Correct!');
  }

  return returnValue;
};

/**
 * @param {number} maxNumber
 */
export const checkUserAnswer = (maxNumber) => {
  // game logic
  let correctAnswer = false;
  const queryNumber = getRandomInt(maxNumber);

  console.log(`Question: ${queryNumber}`);
  const userAnswerStr = readlineSync.question('Your answer: ');

  switch (userAnswerStr) {
    case 'yes':
      correctAnswer = getCorrectAnswer(queryNumber, true);
      break;
    case 'no':
      correctAnswer = getCorrectAnswer(queryNumber, false);
      break;
    default:
      return false;
  }

  return correctAnswer;
};
