import { calculateTotal } from './shoppingCart.js';

test('returns 0 for an empty array', () => {
  expect(calculateTotal([])).toBe(0);
});

test('sums price of a single item', () => {
  expect(calculateTotal([{ price: 10, quantity: 1 }])).toBe(10);
});

test('sums total for multiple items', () => {
  const items = [
    { price: 5, quantity: 2 },
    { price: 10, quantity: 1 },
  ];
  expect(calculateTotal(items)).toBe(20);
});
