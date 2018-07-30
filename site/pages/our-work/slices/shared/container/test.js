// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Container from '.';

describe('site/pages/our-work/slices/shared/container', () => {
  it('renders correctly by default', () => {
    const component = shallow(<Container to="destination">Things</Container>);
    expect(component).toMatchSnapshot();
  });

  it('renders the row-reverse class', () => {
    const component = shallow(
      <Container to="destination" layout="row-reverse">
        Things
      </Container>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders the removePaddingBotttom class', () => {
    const component = shallow(
      <Container to="destination" removeBottomPadding>
        Things
      </Container>,
    );
    expect(component).toMatchSnapshot();
  });
});
