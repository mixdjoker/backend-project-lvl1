// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from './randomint.js';

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
 * @param {number} number
 */
const isUserCorrect = (number) => {
  console.log(`Question: ${number}`);
  const userInput = readlineSync.question('Your answer: ') === 'yes';

  return isPrime(number) === userInput;
};

/**
 * @param {number} maxNumber
 */
export const checkUserAnswer = (maxNumber) => {
  const rndInt = getRandomInt(maxNumber);

  if (isUserCorrect(rndInt)) {
    console.log('Correct!');
    return true;
  }

  return false;
};
