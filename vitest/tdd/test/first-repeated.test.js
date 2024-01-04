import { describe, expect, it } from 'vitest';
import { firstRepeatedNumber } from '../src/first-repeated.js';

describe('firstRepeatedNumber', () => {
  it('should be a function', () => {
    expect(firstRepeatedNumber).toBeTypeOf('function');
  });

  it('should throw if first parameter is missing', () => {
    expect(() => firstRepeatedNumber()).toThrow();
  });

  it('should throw if first parameter is not array', () => {
    expect(() => firstRepeatedNumber(2)).toThrow();
  });

  it('should return -1 if not repeated number is found', () => {
    expect(firstRepeatedNumber([1, 2, 3])).toBe(-1);
  });

  it('should return 3 if the list is [2, 1, 3, 5, 3, 2]', () => {
    expect(firstRepeatedNumber([2, 1, 3, 5, 3, 2])).toBe(3);
  });

  it('should return -1 if the list is [1, 2, 3, 4]', () => {
    expect(firstRepeatedNumber([1, 2, 3, 4])).toBe(-1);
  });

  it('should return 5 if the list is [5, 1, 5, 1]', () => {
    expect(firstRepeatedNumber([5, 1, 5, 1])).toBe(5);
  });
});
