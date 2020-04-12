// @ts-check
import readlineSync from 'readline-sync';

/**
 * @param {number} inputNumber
 */
const checkParity = (inputNumber) => ((inputNumber % 2) === 0);

/**
 * @param {number} max
 */
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

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
const checkUserAnswer = (maxNumber) => {
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

const startGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxAttempts = 3;
  const maxRandomNumber = 100;
  let rightAnswers = 0;

  for (;;) {
    if (checkUserAnswer(maxRandomNumber)) {
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
