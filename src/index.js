// @ts-check

import readlineSync from 'readline-sync';
import parityGame from './paritygame.js';

const gameStart = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  parityGame();
  console.log(`Congratulations, ${userName}!`);
};

export default gameStart;
