/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
// @ts-check

import readlineSync from 'readline-sync';

// Globals Section

export const defaultPromptText = 'Your answer:';
export const defaultCorrectAnswerText = 'Correct!';
export const defaultQuestionText = 'Question:';

// CLI Output Section

/**
 * @param {string} text
 */
const cliOutput = (text) => {
  console.log(text);
};

/**
 * @param {string} text
 */
const cliInput = (text) => {
  const input = readlineSync.question(`${text} `);
  return input;
};

// Display Section

/**
 * @param {string} text
 */
export const displayString = (text) => {
  cliOutput(text);
};

/**
 * @param {string} promptString
 */
export const requestString = (promptString) => {
  const input = cliInput(promptString);
  return input;
};

// Game Utils

/**
 * @param {any[]} args
 */
export const getRandomInt = (...args) => {
  if (args.length === 1) {
    const [max] = args;
    return Math.floor(Math.random() * Math.floor(max));
  }

  if (args.length === 2) {
    const [inMin, inMax] = args;
    const min = Math.ceil(inMin);
    const max = Math.floor(inMax);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export const startGameGreeting = () => {
  const helloText = 'Welcome to the Brain Games!';
  const defaultUserName = 'Default User';
  displayString(helloText);
  const userInput = requestString('May I have your name?');
  const userName = (userInput === '') ? defaultUserName : userInput;
  const greetingText = `Hello, ${userName}!`;
  displayString(greetingText);

  return userName;
};

/**
 * @param {string} userName
 */
export const endGame = (userName) => {
  const byeString = `Congratulations, ${userName}!`;
  displayString(byeString);
};


/**
 * @param {string} text
 * @param {string} promptQuestionText
 */
export const showUserQuestion = (text, promptQuestionText = defaultQuestionText) => {
  displayString(`${promptQuestionText} ${text}`);
};

/**
 * @param {any[]} params
 * @param {string} userCorrectText
 */
export const showUserCorrect = (userCorrectText = defaultCorrectAnswerText, ...params) => {
  const [displayFunction = displayString] = params;
  displayFunction(userCorrectText);
};

/**
 * @param {string} user
 * @param {string} userAnswer
 * @param {number} rightAnswer
 * @param {any[]} params
 */
export const showUserWrong = (user, userAnswer, rightAnswer, ...params) => {
  const defaultWrongText = `Let's try again, ${user}!`;
  const defaultComparedText = `"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`;

  const [
    displayFunction = displayString,
    wrongText = defaultWrongText,
    comparedUserAnswerText = defaultComparedText,
  ] = params;

  displayFunction(comparedUserAnswerText);
  displayFunction(wrongText);
};

/**
 * @param {string} questionText
 * @param {string} promptText
 */
export const getUserAnswer = (questionText, promptText = defaultPromptText) => {
  showUserQuestion(questionText);
  // displayString(questionText);
  const userInput = requestString(promptText);

  return userInput;
};

// New engine logic

/**
 * @param {any} gameFunction
 * @param {any[]} gameParams
 */
export const engineGame = (gameFunction, ...gameParams) => {
  let rightAnswers = 0;
  let continueGame = true;
  const gameMaxAttempts = 3;
  const maxRandomNumber = 100;

  while (continueGame) {
    const answer = gameFunction(maxRandomNumber, ...gameParams);
    if (answer) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
    if (rightAnswers === gameMaxAttempts) {
      continueGame = false;
    }
  }
};

/**
 * @param {string} greatText
 * @param {any} gameFunction
 */
export const commonGameStart = (greatText, gameFunction) => {
  const user = startGameGreeting();
  displayString(greatText);
  engineGame(gameFunction, user);
  endGame(user);
};

export default startGameGreeting;
