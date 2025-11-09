import { uniqueArray } from './arrayUniquer.js';

test('returns original array if no duplicates', () => {
  expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test('returns array with only unique values', () => {
  expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
});

test('handles multiple sequential duplicates', () => {
  expect(uniqueArray([5, 5, 5])).toEqual([5]);
});
