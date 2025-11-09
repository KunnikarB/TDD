export function calculateTotal(items) {
  if (!items || items.length === 0) return 0;
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
