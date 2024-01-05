/**
 * Decodes a message by reversing the characters inside parentheses.
 * If the input message is not a string, an error is thrown.
 *
 * @param {string} message - The message to be decoded.
 * @returns {string} - The decoded message.
 * @throws {Error} - If the input message is not a string.
 */

export const decode = (message) => {
  if (typeof message !== 'string') throw new Error('message must be a string');

  const match = message.match(/\(([^()]+)\)/);

  if (!match) return message;

  const satinized = match[0].slice(1, -1).split('').reverse().join('');
  const result = message.replaceAll(match[0], satinized);

  return decode(result);
};
