import { Grid, Cell } from './index';
import React from 'react';
import { expect } from 'chai';
import { render } from '../../test-helper';
import styles from './style.css';

describe('Grid', () => {
  it('has class withGutter', () => {
    const result = render(<Grid />);
    expect(result.props.className).to.have.string(styles.withGutter);
  });

  describe('when Grid has fit set to true', () => {
    it('adds fit class to Grid', () => {
      const result = render(<Grid fit />);
      expect(result.props.className).to.have.string(styles.fit);
    });
  });

  describe('when Cell specifies size', () => {
    it('adds correct size class to Cell', () => {
      const result = render(<Cell size={2} />);
      expect(result.props.className).to.have.string(styles.size2of12);
    });
  });
});
