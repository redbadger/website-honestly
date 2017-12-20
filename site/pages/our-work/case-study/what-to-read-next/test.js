import React from 'react';
import { shallow } from 'enzyme';

import WhatToReadNext from './index';
import styles from './style.css';

describe.only('Case Study - What to read next', () => {

  it('component renders successfully', () => {
    const wrapper = shallow(<WhatToReadNext />);
    expect(wrapper.find(styles.whatNext));
  });

  it('component renders 3 slices by default', () => {
    const wrapper = shallow(<WhatToReadNext />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.length === 3);
  });

  it('component renders maxNumberSlices slices', () => {
    const maxNumberSlices = 1;
    const wrapper = shallow(<WhatToReadNext maxNumberSlices={maxNumberSlices} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.length === maxNumberSlices);
  });

  it('component renders 1 chosen slice', () => {
    const wrapper = shallow(<WhatToReadNext linkKeys={['retailer']} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props).to.have.property('name', 'Retailer');
    expect(rendered.get(1).props).to.not.have.property('name', 'Retailer');
    expect(rendered.get(2).props).to.not.have.property('name', 'Retailer');
  });

  it('component renders 3 chosen slices', () => {
    const wrapper = shallow(
      <WhatToReadNext linkKeys={['fortnumAndMason', 'financialTimes', 'retailer']} />,
    );
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props).to.have.property('name', 'Fortnum & Mason');
    expect(rendered.get(1).props).to.have.property('name', 'Financial Times');
    expect(rendered.get(2).props).to.have.property('name', 'Retailer');
  });

  it('component renders Link to our work page', () => {
    const wrapper = shallow(<WhatToReadNext />);
    const rendered = wrapper.find('Link');
    expect(rendered.first().props()).to.have.property('to', 'ourWorkPage');
  });
});
