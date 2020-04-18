/* eslint-disable no-restricted-syntax */
// @ts-check

import readlineSync from 'readline-sync';
import { greatText as parityText, checkUserAnswer as parityGame } from './games/paritygame.js';
import { greatText as calcText, checkUserAnswer as calcGame } from './games/calcgame.js';
import { greatText as gcdText, checkUserAnswer as gcdGame } from './games/gcdgame.js';
import { greatText as prgText, checkUserAnswer as prgGame } from './games/progressiongame.js';
import { greatText as primeText, checkUserAnswer as primeGame } from './games/primegame.js';

// List of game objects
const games = [
  [parityText, parityGame],
  [calcText, calcGame],
  [gcdText, gcdGame],
  [prgText, prgGame],
  [primeText, primeGame],
];

// General game greeting
const startGameGreeting = () => {
  const helloText = 'Welcome to the Brain Games!';
  let userName = 'Default User';
  console.log(helloText);
  userName = readlineSync.question('May I have your name? ');

  const greetingText = `Hello, ${userName}!`;
  console.log(greetingText);

  return userName;
};

// General game exit
/**
 * @param {string} userName
 */
const endGame = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return 0;
};

// Common game engine
/**
 * @param {any[]} selectedGame
 * @param {number} gameMaxAttempts
 * @param {number} gameRandomNumber
 * @param {string} userName
 */
const gameEngine = (selectedGame, gameMaxAttempts, gameRandomNumber, userName) => {
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
      gameEngine(game, maxAttempts, maxRandomNumber, user);
    }
  } else {
    const game = gameNumber - 1;
    gameEngine(games[game], maxAttempts, maxRandomNumber, user);
  }

  endGame(user);
};

export default startGame;
