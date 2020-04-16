// @ts-check

/**
 * @param {number} inMin
 * @param {number} inMax
 */
export default (inMin, inMax) => {
  const min = Math.ceil(inMin);
  const max = Math.floor(inMax);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
