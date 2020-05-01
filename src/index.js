/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
// @ts-check

import readlineSync from 'readline-sync';

export const getRandomInt = (...args) => {
  let returnInt = 0;

  if (args.length === 1) {
    const [max] = args;
    returnInt = Math.floor(Math.random() * Math.floor(max));
  }

  if (args.length === 2) {
    const [inMin, inMax] = args;
    const min = Math.ceil(inMin);
    const max = Math.floor(inMax);
    returnInt = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return returnInt;
};

export const getRandomIntSet = (numSetCount, ...args) => {
  const rndNumbers = [];
  for (let index = 0; index < numSetCount; index += 1) {
    rndNumbers.push(getRandomInt(...args));
  }

  return rndNumbers;
};

const gameConsts = {
  helloText: 'Welcome to the Brain Games!',
  defaultUserName: 'Default User',
  nameQuestion: 'May I have your name?',
  questionPrompt: 'Question:',
  defaultPromptText: 'Your answer:',
  correctAnswerString: 'Correct!',
  maxAttemptsCount: 3,
  maxRandomNumber: 100,
};

const displayString = (...strings) => {
  const text = strings.join(' ');
  console.log(text);
};

const getUserAnswer = (promptString, ...showingStrings) => {
  if (showingStrings.length !== 0) {
    displayString(...showingStrings);
  }

  const outputString = readlineSync.question(promptString);
  return outputString;
};

const isUserRight = (gameVariables) => {
  const rightAnswerType = typeof gameVariables.rightAnswer;
  let typedUserAnswer;

  if (rightAnswerType === 'number') {
    typedUserAnswer = Number(gameVariables.userAnswer);
  } else {
    typedUserAnswer = gameVariables.userAnswer;
  }

  if (typedUserAnswer === gameVariables.rightAnswer) {
    return true;
  }

  return false;
};

const setWrongAnswerstring = (gameVariables) => {
  gameVariables.wrongAnswerStrings.push(`Let's try again, ${gameVariables.userName}!\n`);
  gameVariables.wrongAnswerStrings.push(`"${gameVariables.userAnswer}" is wrong answer ;(. Correct answer was "${gameVariables.rightAnswer}".`);
};

const getUserName = () => {
  const userInput = getUserAnswer(gameConsts.nameQuestion, gameConsts.helloText);

  if (userInput === '') {
    return gameConsts.defaultUserName;
  }

  return userInput;
};

const engineGame = (gameLogic, gameVariables) => {
  let rightAnswerCount = 0;
  let continueToPlay = true;

  while (continueToPlay) {
    const { rightAnswer, questionStrings, needToShowWrong = false } = gameLogic(gameConsts.maxRandomNumber);
    gameVariables.rightAnswer = rightAnswer;
    gameVariables.userAnswer = getUserAnswer(gameConsts.defaultPromptText, gameConsts.questionPrompt, ...questionStrings);

    setWrongAnswerstring(gameVariables);
    const check = isUserRight(gameVariables);

    if (check) {
      rightAnswerCount += 1;
      displayString(gameConsts.correctAnswerString);
    } else {
      rightAnswerCount = 0;
      if (needToShowWrong) displayString(gameVariables.wrongAnswerStrings);
    }

    if (rightAnswerCount === gameConsts.maxAttemptsCount) {
      continueToPlay = false;
    }
  }
};

export const startGame = (...args) => {
  const [gameGreatText, gameLogic] = args;
  const gameVariables = {
    userName: '',
    wrongAnswerStrings: [],
    userAnswer: undefined,
    rightAnswer: undefined,
  };

  gameVariables.userName = getUserName();
  displayString(`Hello, ${gameVariables.userName}!`);

  if (args.length !== 0) {
    displayString(gameGreatText);
    engineGame(gameLogic, gameVariables);
  }

  displayString(`Congratulations, ${gameVariables.userName}!`);
};

export default startGame;
