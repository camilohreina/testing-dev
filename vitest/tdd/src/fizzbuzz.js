/**
 * Returns 'fizz' if the given number is divisible by 3,
 * 'buzz' if the given number is divisible by 5,
 * 'fizzbuzz' if the given number is divisible by both 3 and 5,
 * or the given number itself if it is not divisible by either 3 or 5.
 *
 * @param {number} number - The number to be evaluated.
 * @returns {string|number} - The result of the fizzbuzz evaluation.
 * @throws {Error} - If the input is not a number or is NaN.
 */

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('number is required');
  if (Number.isNaN(number)) throw new Error('number is required');

  const multiplies = { 3: 'fizz', 5: 'buzz' };

  let output = '';
  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });

  return output === '' ? number : output;
};
