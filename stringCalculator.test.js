import { stringCalculator } from './stringCalculator.js';

test('returns 0 for empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

test('returns the number itself for a single number input', () => {
  expect(stringCalculator('5')).toBe(5);
});

test('returns the sum of two numbers separated by a comma', () => {
  expect(stringCalculator('1,2')).toBe(3);
});
