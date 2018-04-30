import { expect } from 'chai';
import { toggleGreyscale } from './greyscale';

describe('grayscale', () => {
  it('adds the correct class', () => {
    toggleGreyscale();
    expect(document.body.classList.toString()).to.contain('accessibilityDay');
  });
});
