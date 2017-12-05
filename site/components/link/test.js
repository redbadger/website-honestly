// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Link from '.';

const mockContext = {
  stateNavigator: {
    stateContext: {
      state: {},
    },
  },
};

describe('components/link', () => {
  it('renders OK children', () => {
    shallow(<Link to="foo">Hello</Link>, {
      context: mockContext,
    });
  });
});
