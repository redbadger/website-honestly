// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Link from '.';

describe('components/link', () => {
  it('renders OK children', () => {
    shallow(<Link to="foo">Hello</Link>);
  });
});
