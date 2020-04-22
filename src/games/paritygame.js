// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from '../randomint.js';

export const greatText = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} num
 */
const isEvenNumber = (num) => ((num % 2) === 0);

/**
 * @param {number} numToCheck
 * @param {boolean} rightAnswer
 */
const isAnswerCorrect = (numToCheck, rightAnswer) => {
  if (isEvenNumber(numToCheck) === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

/**
 * @param {number} numToShow
 */
const getUserAnswer = (numToShow) => {
  console.log(`Question: ${numToShow}`);
  const userInput = readlineSync.question('Your answer: ');

  return userInput;
};

/**
 * @param {number} maxNumber
 */
export const checkUserAnswer = (maxNumber) => {
  // game logic
  let correctAnswer = false;
  const queryNumber = getRandomInt(maxNumber);
  const userAnswerStr = getUserAnswer(queryNumber);

  switch (userAnswerStr) {
    case 'yes':
      correctAnswer = isAnswerCorrect(queryNumber, true);
      break;
    case 'no':
      correctAnswer = isAnswerCorrect(queryNumber, false);
      break;
    default:
      return false;
  }

  return correctAnswer;
};
