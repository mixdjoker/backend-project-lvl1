// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from '../randomint.js';

export const greatText = 'Find the greatest common divisor of given numbers.';

/**
 * @param {number} aNum
 * @param {number} bNum
 */
const gcd = (aNum, bNum) => {
  if (bNum === 0) {
    return aNum;
  }

  return gcd(bNum, aNum % bNum);
};

/**
 * @param {number} firstNum
 * @param {number} secondNum
 */
const getUserAnswer = (firstNum, secondNum) => {
  console.log(`Question: ${firstNum} ${secondNum}`);
  const userOutput = readlineSync.question('Your answer: ');

  return Number(userOutput);
};

/**
 * @param {number} maxNumber
 */
export const checkUserAnswer = (maxNumber) => {
  const firstNumber = getRandomInt(maxNumber);
  const secondNumber = getRandomInt(maxNumber);
  const userNumber = getUserAnswer(firstNumber, secondNumber);
  const rightResult = gcd(firstNumber, secondNumber);

  if (userNumber === rightResult) {
    console.log('Correct!');
    return true;
  }
  return false;
};
