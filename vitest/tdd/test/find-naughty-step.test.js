import { describe, it, expect } from 'vitest';
import { findNaughtyStep } from '../src/find-naughty-step';

describe('find naughty step', () => {
  it('find naughty step should be a function', () => {
    expect(typeof findNaughtyStep).toBe('function');
  });

  it('should return throw if first argument is not a string', () => {
    expect(() => findNaughtyStep(123)).toThrow();
  });

  it('should return throw if second argument is not a string', () => {
    expect(() => findNaughtyStep('hello', 123)).toThrow();
  });

  it('should return empty string if both arguments have the same length', () => {
    expect(findNaughtyStep('hello', 'hello')).toBe('');
  });

  it('should return "e" if the first argument "abcd" and second argument is "abcde" ', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e');
  });

  it('should return "f" if the first argument "stepfor" and second argument is "stepor" ', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f');
  });
});
