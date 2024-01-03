import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz.js';

describe('fizzbuzz', () => {
  // test deactivated because it is already covered
  /*   it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });
 */
  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('number is required');
  });

  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('number is required');
  });

  it('should return 1 if 1 is provided', () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it('should return 2 if 2 is provided', () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it('should return fizz if 3 is provided', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  //test covered by previous test
  /* it('should return  4 if 4 is provided', () => {
    expect(fizzbuzz(4)).toBe(4);
  }); */

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
  });

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });
});
