import { describe, it, expect } from 'vitest';
import { decode } from '../src/decode';

describe('decode', () => {
  it('decode should be a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('should return throw if first argument is not a string', () => {
    expect(() => decode(123)).toThrow();
  });

  it('should return "hola mundo" if the first argument is "hola (odnum)"', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo');
  });
  it('should return "hello world!" if the first argument is "(olleh) (dlrow)!"', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!');
  });
  it('should return "santaclaus" if the first argument is "sa(u(cla)atn)s"', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus');
  });
});
