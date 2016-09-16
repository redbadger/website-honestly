import {
  flatten,
  flatMap,
  uniq,
} from '.';

describe('lib/array', () => {
  describe('flatten', () => {
    it('flatten one layer of nested arrays', () => {
      const arr = [1, [2, [3], 2, [3]], 1];
      const res = flatten(arr);
      expect(res).to.deep.equal([1, 2, [3], 2, [3], 1]);
    });
  });

  describe('flatMap', () => {
    it('it maps and flattens (gosh).', () => {
      const arr = [1, 2, 3];
      const two = x => [x, x];
      const res = flatMap(arr, two);
      expect(res).to.deep.equal([1, 1, 2, 2, 3, 3]);
    });
  });

  describe('uniq', () => {
    it('it remove duplicate elements', () => {
      const arr = [1, 1.0, 1, 'a', 'a', '1', [], [], [1]];
      const res = uniq(arr);
      expect(res).to.deep.equal([1, 'a', '1', [], [], [1]]);
    });
  });
});
