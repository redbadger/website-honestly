import React from 'react';

import LunchIcon from './images/lunch';
import WorkshopIcon from './images/workshop';
import OneOnOneIcon from './images/1on1';
import TwoWeekIcon from './images/2weekengagement';

export const atAGlanceTypes = {
  lunch: {
    text: 'Lunch & learn',
    image: () => <LunchIcon />,
    messaging: 'Book now',
  },
  workshop: {
    text: 'Workshop',
    image: () => <WorkshopIcon />,
    messaging: 'Book now',
  },
  'one-on-one': {
    text: 'One-to-one',
    image: () => <OneOnOneIcon />,
    messaging: 'Book now',
  },
  'two-week-engagement': {
    text: 'Two week engagement',
    image: () => <TwoWeekIcon />,
    messaging: 'Book now',
  },
  'one-week-engagement': {
    text: 'One week engagement',
    image: () => <TwoWeekIcon />,
    messaging: 'Book now',
  },
};
