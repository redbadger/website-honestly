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
      states: {
        foo: {},
        bar: {},
        barChild: {
          parentKey: 'bar',
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
    expect(wrapper.text()).to.equal('<NavigationLink />');
  });

  it('applies activeCssClass when the specified `to` state is a direct parent of the current state', () => {
    const wrapper = shallow(
      <Link to="foo" activeCssClass="active">
        Hello
      </Link>,
      {
        context: createMockContext('foo'),
      },
    );
    expect(wrapper.hasClass('active')).to.equal(true);
  });

  it('applies activeCssClass when the specified `to` state is a parent of the current state', () => {
    const wrapper = shallow(
      <Link to="bar" activeCssClass="active">
        Hello
      </Link>,
      {
        context: createMockContext('barChild'),
      },
    );
    expect(wrapper.hasClass('active')).to.equal(true);
  });

  it('does not apply activeCssClass when the specified `to` state is not a parent of the current state', () => {
    const wrapper = shallow(
      <Link to="foo" activeCssClass="active">
        Hello
      </Link>,
      {
        context: createMockContext('bar'),
      },
    );
    expect(wrapper.hasClass('active')).to.equal(false);
  });
});
