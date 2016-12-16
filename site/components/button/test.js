// @flow
import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Button from '.';

describe('components/button', () => {
  it('renders with label', () => {
    const wrapper = render(<Button label="Button Label" />);
    return expect(wrapper.text()).to.equal('Button Label');
  });
});
