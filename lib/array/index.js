export function flattern(array) {
  return Array.prototype.concat.apply([], array);
}

export function flatMap(array, lambda) {
  return flattern(array.map(lambda));
}
