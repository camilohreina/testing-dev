import { describe, it, expect } from 'vitest';
import { cyberReindeer } from '../src/cyber-reindeer';

describe('cyber-reindeer', () => {
  it('cyberReindeer should be a function', () => {
    expect(typeof cyberReindeer).toBe('function');
  });

  it('the first parameter should be a string', () => {
    expect(() => cyberReindeer(123)).toThrow();
  });
  it('the first parameter should be a number', () => {
    expect(() => cyberReindeer('123')).toThrow();
  });
});
