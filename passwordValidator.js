export function validatePassword(password) {
  if (!password || password.length < 8) return false;
  return /\d/.test(password);
}
