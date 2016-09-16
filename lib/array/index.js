export function flattern(array) {
  return Array.prototype.concat.apply([], array);
}

export function flatMap(array, lambda) {
  return flattern(array.map(lambda));
}

export function uniq(array) {
  return Array.from(new Set(array));
}
