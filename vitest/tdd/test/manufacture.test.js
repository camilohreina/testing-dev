import { describe, it, expect } from 'vitest';
import { manufacture } from '../src/manufacture.js';

describe('manufacture', () => {
  it('should be a function', () => {
    expect(typeof manufacture).toBe('function');
  });

  it('should throw if first parameter is missing', () => {
    expect(() => manufacture()).toThrow();
  });

  it('should throw if second parameter is missing', () => {
    expect(() => manufacture(['tren'])).toThrow();
  });

  it('should throw if first parameter is not array', () => {
    expect(() => manufacture(2, 'tren')).toThrow();
  });

  it('should throw if second parameter is not string', () => {
    expect(() => manufacture(['tren'], 2)).toThrow();
  });

  it('should return ["tren", "oso"] if list is ["tren", "oso", "pelota"] and materials is "trenoso"', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'trenoso')).toEqual([
      'tren',
      'oso',
    ]);
  });

  it('should return ["puzzle"] if list is ["juego", "puzzle"] and materials is "jlepuz"', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle']);
  });
  it('should return [] if list is ["libro", "ps5"] and materials is "psli"', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([]);
  });
});
