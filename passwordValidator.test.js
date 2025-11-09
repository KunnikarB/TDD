import { validatePassword } from './passwordValidator.js';

test('returns false if password is less than 8 characters', () => {
  expect(validatePassword('kun99')).toBe(false);
});

test('returns false if password does not contain a number', () => {
  expect(validatePassword('kunnikar')).toBe(false);
});

test('returns true if password is 8+ chars and contains a number', () => {
  expect(validatePassword('kunnikar99')).toBe(true);
});
