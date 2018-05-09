import { expect } from 'chai';
import { toggleGreyscale } from './greyscale';

describe('grayscale', () => {
  afterEach(() => {
    document.body.classList.remove('accessibilityDay');
    document.cookie = 'a11yDay=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });

  it('adds the correct class', () => {
    toggleGreyscale();
    expect(document.body.classList.toString()).to.contain('accessibilityDay');
  });

  it('removes the correct class', () => {
    toggleGreyscale();
    toggleGreyscale();
    expect(document.body.classList.toString()).not.to.contain('accessibilityDay');
  });

  it('sets the cookie to on', () => {
    toggleGreyscale();
    expect(document.cookie).to.contain('a11yDay=on');
  });

  it('sets the cookie to off', () => {
    toggleGreyscale();
    toggleGreyscale();
    expect(document.cookie).to.contain('a11yDay=off');
  });
});
