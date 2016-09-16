export function flatten(array) {
  return Array.prototype.concat.apply([], array);
}

export function flatMap(array, lambda) {
  return flatten(array.map(lambda));
}

export function uniq(array) {
  return Array.from(new Set(array));
}
