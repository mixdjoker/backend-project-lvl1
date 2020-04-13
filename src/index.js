/* eslint-disable no-restricted-syntax */
// @ts-check

import readlineSync from 'readline-sync';
import parityGame from './games/paritygame.js';
import calcGame from './games/calcgame.js';

const games = [
  parityGame,
  calcGame,
];

/**
 * @param {number} [gameChoise]
 */
const gameStart = (gameChoise) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const maxAttempts = 3;
  const maxRandomNumber = 100;

  if (gameChoise === 0) {
    for (const game of games) {
      game(maxAttempts, maxRandomNumber, userName);
    }
  } else {
    games[gameChoise - 1](maxAttempts, maxRandomNumber, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameStart;
