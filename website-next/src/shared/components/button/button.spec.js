import Button from './index';
import React from 'react';
import { render } from '../../test-helper';
import { expect } from 'chai';

describe('Button', () => {
  it('is a button if href is not passed in props', () => {
    const result = render(<Button />);

    expect(result.type).to.equal('button');
  });

  it('is a link if href is passed in props', () => {
    const result = render(<Button href="//red-badger.com" />);

    expect(result.type).to.equal('a');
  });
});
