import { shallow } from 'enzyme';
import React from 'react';
import HR from './';

describe('HR', () => {
  const defaultProps = {
    color: 'red',
  };

  it('renders a red HR', () => {
    expect(shallow(<HR {...defaultProps} />)).toMatchSnapshot();
  });
});
