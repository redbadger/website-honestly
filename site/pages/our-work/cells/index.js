// @flow
import * as React from 'react';

import Cell from './cell';

import BmwLogo from '../logos/images/bmw.png';
import BbcLogo from '../logos/images/bbc.png';
import SkyLogo from '../logos/images/sky.png';
import HallerLogo from '../logos/images/haller.png';

import HallerImage from './images/haller.jpg';
import BmwImage from './images/bmw.jpg';

const BBCCell = () => (
  <Cell
    clientName="BBC"
    clientLogo={BbcLogo}
    headerText="Delivering a better customer experience, faster"
    descriptionText="How the rapid prototyping model helped the BBC to uncover new ways to engage its audience."
    routeKey="bbcCaseStudy"
  />
);

const SkyCell = () => (
  <Cell
    clientName="Sky"
    clientLogo={SkyLogo}
    headerText="Helping customers help themselves"
    descriptionText="Enabling Sky to deliver continual improvement across customer services"
    routeKey="skyCaseStudy"
  />
);

const HallerCell = () => (
  <Cell
    clientName="Haller"
    clientLogo={HallerLogo}
    image={HallerImage}
    headerText="Developing technology for good"
    descriptionText="Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers."
    routeKey="hallerCaseStudy"
    alt="A man holding up the Haller app on a mobile device)"
  />
);

const BMWCell = () => (
  <Cell
    clientName="BMW"
    clientLogo={BmwLogo}
    image={BmwImage}
    headerText="The shortcut between you and the museum"
    descriptionText="Pushing the boundaries of HTML5 technology to deliver a multi-platform 3D tour of the BMW Museum."
    routeKey="bmwCaseStudy"
    alt="A wide-shot black and white CG render of a car in a museum surrounded by ribbons of light"
  />
);

export { BBCCell, SkyCell, HallerCell, BMWCell };
