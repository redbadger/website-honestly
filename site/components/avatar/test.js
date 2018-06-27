// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '.';

describe('<Avatar />', () => {
  it('renders image child', () => {
    const wrapper = shallow(<Avatar image="" name="Testa Fiesta" />);
    expect(wrapper.find('img').html()).toEqual('<img src="" alt="Testa Fiesta"/>');
  });

  it('sets an img src', () => {
    const wrapper = shallow(<Avatar image="myAwesomeImage.png" name="" />);
    expect(wrapper.containsMatchingElement(<img src="myAwesomeImage.png" alt="" />)).toEqual(true);
  });

  it('sets name as alt text', () => {
    const wrapper = shallow(<Avatar image="" name="Testa Fiesta" />);
    expect(wrapper.containsMatchingElement(<img src="" alt="Testa Fiesta" />)).toEqual(true);
  });

  it('sets a size', () => {
    const wrapper = shallow(<Avatar image="" name="Testa Fiesta" size={120} />);
    expect(wrapper.props().style.width).toEqual(120);
    expect(wrapper.props().style.height).toEqual(120);
  });
});
