/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
// @ts-check

import readlineSync from 'readline-sync';
// Delete after refactoring
import { greatText as parityText, checkUserAnswer as parityGame } from './games/paritygame.js';
// import { greatText as calcText, checkUserAnswer as calcGame } from './games/calcgame.js';
import { greatText as gcdText, checkUserAnswer as gcdGame } from './games/gcdgame.js';
import { greatText as prgText, checkUserAnswer as prgGame } from './games/progressiongame.js';
import { greatText as primeText, checkUserAnswer as primeGame } from './games/primegame.js';

// Delete after refactoring
const games = [
  [parityText, parityGame],
  [gcdText, gcdGame],
  [prgText, prgGame],
  [primeText, primeGame],
];

// CLI Section

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

// New engine logic

/**
 * @param {string} gameName
 * @param {any} gameFunction
 * @param {any[]} gameParams
 */
export const engineGame = (gameName, gameFunction, ...gameParams) => {
  const gameMaxAttempts = 3;
  const maxRandomNumber = 100;
  let rightAnswers = 0;
  displayString(gameName);
  for (;;) {
    if (gameFunction(maxRandomNumber, ...gameParams)) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
    if (rightAnswers === gameMaxAttempts) {
      break;
    }
  }
};

// Delete after refactoring Section

// Old game engine logic
/**
 * @param {any[]} selectedGame
 * @param {number} gameMaxAttempts
 * @param {number} gameRandomNumber
 * @param {string} userName
 */
const playGame = (selectedGame, gameMaxAttempts, gameRandomNumber, userName) => {
  const gameParams = [gameRandomNumber, userName];
  let rightAnswers = 0;

  console.log(selectedGame[0]);

  for (;;) {
    if (selectedGame[1](...gameParams)) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
    if (rightAnswers === gameMaxAttempts) {
      break;
    }
  }
};

/**
 * @param {number} [gameNumber]
 */
const startGame = (gameNumber) => {
  const maxAttempts = 3;
  const maxRandomNumber = 100;

  const user = startGameGreeting();

  if (gameNumber === 0) {
    for (const game of games) {
      playGame(game, maxAttempts, maxRandomNumber, user);
    }
  } else {
    const game = gameNumber - 1;
    playGame(games[game], maxAttempts, maxRandomNumber, user);
  }

  endGame(user);
};

export default startGame;
