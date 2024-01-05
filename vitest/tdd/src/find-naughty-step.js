/**
 * Finds the "naughty step" character that differs between two strings.
 *
 * @param {string} original - The original string.
 * @param {string} modified - The modified string.
 * @returns {string} - The "naughty step" character.
 * @throws {Error} - If either original or modified is not a string.
 */

export const findNaughtyStep = (original, modified) => {
  if (typeof original !== 'string')
    throw new Error('First argument must be a string');

  if (typeof modified !== 'string')
    throw new Error('Second argument must be a string');

  if (original.length === modified.length) return '';
  const count = Math.max(original.length, modified.length);

  for (let i = 0; i < count; i++) {
    if (original[i] !== modified[i])
      return modified.length > original.length ? modified[i] : original[i];
  }
};
