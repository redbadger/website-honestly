// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import { HubspotButton } from '.';
import hubspotButtonsRaw from './hubspot-buttons';

import hubspotButtonsNotes from './hubspot-buttons.md';

const options = Object.keys(hubspotButtonsRaw);

storiesOf('Components/HubspotButtons', module)
  .addDecorator(withKnobs)
  .add(
    "with selectable hubspot cta's",
    withNotes(hubspotButtonsNotes)(() => (
      <HubspotButton hubspotName={select('cta', options, options[0])} />
    )),
  )
  .add(
    'with gaTracking callback',
    withNotes(hubspotButtonsNotes)(() => (
      <HubspotButton gaTracking={action('callback-called')} hubspotName="webinar" />
    )),
  );
