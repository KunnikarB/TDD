import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).not.toBe(4);
});

test('two plus 2', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

const shoppingList = [
  'mango',
  'milk',
  'banana',
  'rice'
];

test('The shopping has milk on it', () => {
  expect(shoppingList).toContain('milk');
});
