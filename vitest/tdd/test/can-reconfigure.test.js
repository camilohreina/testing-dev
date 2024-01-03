import { describe, it, expect } from 'vitest';
import { canReconfigure } from '../src/can-reconfigure';

describe('can-reconfigure', () => {
  it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function');
  });

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow();
  });

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow();
  });

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow();
  });

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean');
  });

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('a', 'ab')).toBe(false);
  });

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('a', 'ab')).toBe(false);
  });

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false);
  });

  it('should return false if strings provided have different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  });
});
