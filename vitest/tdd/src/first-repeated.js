/**
 * Finds the first repeated number in an array of gifts.
 *
 * @param {Array} gifts - The array of gifts.
 * @returns {number} - The first repeated number, or -1 if no repeated number is found.
 * @throws {Error} - If the gifts parameter is missing or not an array.
 */

export const firstRepeatedNumber = (gifts) => {
  if (!gifts) throw new Error('Missing parameter');
  if (!Array.isArray(gifts)) throw new Error('Parameter is not an array');

  const giftsMap = new Set();

  for (let i = 0; i < gifts.length; i++) {
    if (giftsMap.has(gifts[i])) {
      return gifts[i];
    }
    giftsMap.add(gifts[i]);
  }

  return -1;
};
