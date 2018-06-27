// @flow
import React from 'react';
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
    expect(wrapper.text()).toEqual('<NavigationLink />');
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
    expect(wrapper.hasClass('active')).toEqual(true);
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
    expect(wrapper.hasClass('active')).toEqual(true);
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
    expect(wrapper.hasClass('active')).toEqual(false);
  });

  describe('#shouldNavigate', () => {
    it('returns true when target is not set', () => {
      const wrapper = shallow(<Link to="foo">Hello</Link>, {
        context: createMockContext('bar'),
      });

      expect(wrapper.instance().shouldNavigate()).toEqual(true);
    });

    it('returns false when target is set to _blank', () => {
      const wrapper = shallow(
        <Link to="foo" target="_blank">
          Hello
        </Link>,
        {
          context: createMockContext('bar'),
        },
      );

      expect(wrapper.instance().shouldNavigate()).toEqual(false);
    });
  });
});
