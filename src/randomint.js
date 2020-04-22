/* eslint-disable consistent-return */
// @ts-check

/**
 * @param {any[]} args
 */
export default (...args) => {
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
