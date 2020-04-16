// @ts-check
import readlineSync from 'readline-sync';
import getRandomInt from './randomint.js';

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

export /**
 * @param {number} maxNumber
 */
const checkUserAnswer = (maxNumber) => {
  const firstNumber = getRandomInt(maxNumber);
  const secondNumber = getRandomInt(maxNumber);

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userNumber = readlineSync.question('Your answer: ');
  const rightResult = gcd(firstNumber, secondNumber);
  if (Number(userNumber) === rightResult) {
    console.log('Correct!');
    return true;
  }
  return false;
};
