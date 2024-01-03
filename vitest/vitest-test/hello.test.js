import { test, expect } from 'vitest';

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

test('1 + 1 = 2', () => {
  expect(sum(1, 1)).toEqual(2);
});

test('1 + 2 + 3= 6', () => {
  expect(sum(1, 2, 3)).toEqual(6);
});

test('1 + 2 + 3 + 4 + 5 +6 + 7 + 8 + 9 + 10 = 55', () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55);
});

test('1 number', () => {
  expect(sum(500)).toEqual(500);
});

test('0 number', () => {
  expect(sum()).toEqual(0);
});
