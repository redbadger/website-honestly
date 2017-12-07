// @flow
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Link from '.';

function createMockContext(parentKey) {
  return {
    stateNavigator: {
      stateContext: {
        state: {
          parentKey,
        },
      },
    },
  };
}

describe('components/link', () => {
  it('renders OK children', () => {
    const wrapper = shallow(<Link to="foo">Hello</Link>, {
      context: createMockContext(),
    });
    expect(wrapper.text()).to.contain('<NavigationLink />');
  });

  it('applies childActiveCssClass when the specified `to` state is a parent of the current state', () => {
    const wrapper = shallow(
      <Link to="foo" childActiveCssClass="active">
        Hello
      </Link>,
      {
        context: createMockContext('foo'),
      },
    );
    expect(wrapper.hasClass('active')).to.eq(true);
  });

  it('does not apply childActiveCssClass when the specified `to` state is not a parent of the current state', () => {
    const wrapper = shallow(
      <Link to="foo" childActiveCssClass="active">
        Hello
      </Link>,
      {
        context: createMockContext('bar'),
      },
    );
    expect(wrapper.hasClass('active')).to.eq(false);
  });
});
