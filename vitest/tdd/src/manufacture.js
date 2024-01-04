/**
 * Filters an array of gifts based on the availability of materials.
 *
 * @param {Array<string>} gifts - The array of gifts to filter.
 * @param {string} materials - The string representing the available materials.
 * @returns {Array<string>} - The filtered array of gifts.
 * @throws {Error} - If no gifts or materials are provided, or if gifts is not an array, or if materials is not a string.
 */

export const manufacture = (gifts, materials) => {
  if (!gifts) throw new Error('No gifts');
  if (!materials) throw new Error('No materials');
  if (!Array.isArray(gifts)) throw new Error('Gifts should be an array');
  if (typeof materials !== 'string')
    throw new Error('Materials should be a string');

  return gifts.filter((gift) => {
    return gift.split('').every((letter) => materials.includes(letter));
  });
};
