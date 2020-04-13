// @ts-check
import readlineSync from 'readline-sync';

/**
 * @param {number} max
 */
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const mathCase = {
  0: '+',
  1: '-',
  2: '*',
};

/**
 * @param {number} maxRnd
 * @param {string} user
 */
const checkUserAnswer = (maxRnd, user) => {
  const firstNumber = getRandomInt(maxRnd);
  const secondNumber = getRandomInt(maxRnd);
  const mathAction = getRandomInt(3);

  let mathResult = 0;

  switch (mathAction) {
    case 0:
      mathResult = firstNumber + secondNumber;
      break;
    case 1:
      mathResult = firstNumber - secondNumber;
      break;
    case 2:
      mathResult = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  console.log(`Question: ${firstNumber} ${mathCase[mathAction]} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (mathResult === Number(userAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${mathResult.toString()}".`);
  console.log(`Let's try again, ${user}!`);
  return false;
};

/**
 * @param {number} maxAttempts
 * @param {number} maxRandomNumber
 * @param {string} userName
 */
const startGame = (maxAttempts, maxRandomNumber, userName) => {
  console.log('What is the result of the expression?');

  let rightAnswers = 0;

  for (;;) {
    if (checkUserAnswer(maxRandomNumber, userName)) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
    if (rightAnswers === maxAttempts) {
      break;
    }
  }
};

export default startGame;
