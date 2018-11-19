import React from 'react';
import { mount } from 'enzyme';

import Triptych from './index';

function createClientXY(x, y) {
  return { clientX: x, clientY: y };
}

export function createStartTouchEventObject({ x = 0, y = 0 }) {
  return { touches: [createClientXY(x, y)] };
}

export function createMoveTouchEventObject({ x = 0, y = 0 }) {
  return { preventDefault: () => {}, changedTouches: [createClientXY(x, y)] };
}

describe('pages/our-work/case-study/pride/triptych', () => {
  it('renders correctly', () => {
    const rendered = mount(<Triptych />);
    expect(rendered).toMatchSnapshot();
  });

  it('changes the active image to the left one if the first radio button is pressed', () => {
    const rendered = mount(<Triptych />);
    const firstRadio = rendered.find('input').at(0);
    firstRadio.simulate('change', { target: { value: '0' } });
    expect(rendered.state('activeImg')).toEqual(0);
  });

  it('changes the active image to the right one if swiped left', () => {
    const rendered = mount(<Triptych />);
    const imgWrapper = rendered.find('.wrapper').get(0);
    // https://github.com/facebook/react/issues/9809
    imgWrapper.ref.current.ontouchstart(createMoveTouchEventObject({ x: 20, y: 0 }));
    imgWrapper.ref.current.ontouchend(createMoveTouchEventObject({ x: 10, y: 0 }));
    expect(rendered.state('activeImg')).toEqual(2);
  });

  it('builds the correct class for an active image', () => {
    const cssClass = Triptych.activeClass(0, 0);
    expect(cssClass).toEqual('fakeControl fakeControlActive');
  });
});
