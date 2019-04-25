// @flow

import React from 'react';
import { render, mount } from 'enzyme';

import Link from '.';
import { Context, mockNavigator } from './test-helper';

describe('components/link', () => {
  it('renders its children', () => {
    const link = render(
      <Context stateNavigator={mockNavigator()}>
        <Link to="foo">Hello</Link>
      </Context>,
    );
    expect(link.text()).toEqual('Hello');
  });

  it('applies activeCssClass when the specified `to` state is a direct parent of the current state', () => {
    const navigator = mockNavigator('foo');

    const link = render(
      <Context stateNavigator={navigator}>
        <Link to="foo" activeCssClass="active">
          Hello
        </Link>
      </Context>,
    );
    expect(link.hasClass('active')).toBe(true);
  });

  it('applies activeCssClass when the specified `to` state is a parent of the current state', () => {
    const link = render(
      <Context stateNavigator={mockNavigator('barChild')}>
        <Link to="bar" activeCssClass="active">
          Hello
        </Link>
      </Context>,
    );

    expect(link.hasClass('active')).toEqual(true);
  });

  it('does not apply activeCssClass when the specified `to` state is not a parent of the current state', () => {
    const link = render(
      <Context stateNavigator={mockNavigator('bar')}>
        <Link to="foo" activeCssClass="active">
          Hello
        </Link>
      </Context>,
    );
    expect(link.hasClass('active')).toEqual(false);
  });

  describe('`target` prop', () => {
    it('navigates the current page if `target` is not set', () => {
      const navigator = mockNavigator('bar');

      const onNavigate = jest.fn();
      navigator.onNavigate(onNavigate);

      const link = mount(
        <Context stateNavigator={navigator}>
          <Link to="foo">Hello</Link>
        </Context>,
      );

      link.simulate('click');

      expect(onNavigate).toHaveBeenCalledTimes(1);

      link.unmount();
    });

    it('does not navigate the current page if `target` is set to `_blank`', () => {
      const navigator = mockNavigator('bar');

      const onNavigate = jest.fn();
      navigator.onNavigate(onNavigate);

      const link = mount(
        <Context stateNavigator={navigator}>
          <Link to="foo" target="_blank">
            Hello
          </Link>
        </Context>,
      );

      link.simulate('click');

      expect(onNavigate).not.toHaveBeenCalled();

      link.unmount();
    });

    it('adds a `rel` attribute if `target` is set to `_blank`', () => {
      const link = render(
        <Context stateNavigator={mockNavigator('bar')}>
          <Link to="foo" target="_blank">
            Hello
          </Link>
        </Context>,
      );

      expect(link.attr('rel')).toEqual('noopener noreferrer');
    });
  });
});
