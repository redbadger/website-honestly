import React from 'react';
import { shallow } from 'enzyme';

import Cell from '.';

describe('pages/our-work/cells/cell', () => {
  it('renders a cell with a client image', () => {
    const cellData = {
      clientName: 'Haller',
      clientLogo: '/assets-honestly/haller-38WYH.png',
      image: '/assets-honestly/Hall-3uKBy.jpg',
      headerText: 'Developing technology for good',
      descriptionText:
        'Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers.',
      routeKey: 'hallerCaseStudy',
    };

    const grid = shallow(<Cell {...cellData} />);
    expect(grid).toMatchSnapshot();
  });

  it('renders a cell without a client image and large header', () => {
    const cellData = {
      clientName: 'Haller',
      clientLogo: '/assets-honestly/haller-38WYH.png',
      headerText: 'Developing technology for good',
      descriptionText:
        'Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers.',
      routeKey: 'hallerCaseStudy',
    };

    const grid = shallow(<Cell {...cellData} />);
    expect(grid).toMatchSnapshot();
  });
});
