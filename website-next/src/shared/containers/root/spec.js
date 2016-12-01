import Root from './index';
import { expect } from 'chai';
import React from 'react';
import styles from './style.css';

describe('Root component', () => {
  it('renders children', () => {
    const markup = React.renderToStaticMarkup(
      <Root>Hello, world</Root>
    );

    expect(markup).to.contain('Hello, world');
  });

  it('adds an error background when provided', () => {
    const markup = React.renderToStaticMarkup(<Root background="error" />);

    expect(markup).to.contain(styles['error-background']);
  });
});
