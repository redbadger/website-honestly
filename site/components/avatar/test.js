// @flow
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Avatar from '.';

describe('<Avatar />', () => {
  it('renders image child', () => {
    const wrapper = shallow(<Avatar image={''} name={'Testa Jesta'} />);
    expect(wrapper.contains('<img>'));
  });

  it('sets an img src', () => {
    const wrapper = shallow(<Avatar image={'myAwesomeImage.png'} name={''} />);
    expect(wrapper.containsMatchingElement(<img src="myAwesomeImage.png" alt="" />)).to.equal(true);
  });

  it('sets name as alt text', () => {
    const wrapper = shallow(<Avatar image={''} name={'Testa Jesta'} />);
    expect(wrapper.containsMatchingElement(<img src="" alt="Testa Jesta" />)).to.equal(true);
  });

  it('sets a size', () => {
    const wrapper = shallow(<Avatar image={''} name={'Testa Jesta'} size={120} />);
    expect(wrapper.props().style).to.include({ width: 120, height: 120 });
  });
});
