import { formatDate } from './dateFormatter.js';

test('returns empty string for null or undefined input', () => {
  expect(formatDate(null)).toBe('');
  expect(formatDate(undefined)).toBe('');
});

test('formats a given Date object correctly', () => {
  const date = new Date('2025-11-06');
  expect(formatDate(date)).toBe('11/06/2025');
});

test('formats different Date objects correctly', () => {
  const date = new Date('2024-01-15');
  expect(formatDate(date)).toBe('01/15/2024');
});
