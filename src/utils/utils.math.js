export function isInt(x) {
  return (
    typeof x === 'number' &&
    x % 1 === 0
  );
}
