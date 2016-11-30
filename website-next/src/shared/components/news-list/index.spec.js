import NewsList from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultNews } from '../../../../spec/fixtures/news.js';

describe('NewsList component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<NewsList
      news={[
        defaultNews,
      ]}
    />);
    expect(wrapper.find('ul').length).to.equal(1);
  });
});
