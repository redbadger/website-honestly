// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

import React from 'react';
import ReactGA from 'react-ga';

import { HubspotButton } from '../../../components/buttons';
import styles from '../style.css';

import logAmplitudeEvent from '../../../tracking/amplitude';

const trackWebinarClicks = () => {
  logAmplitudeEvent('CLICK WATCH WEBINAR');
  ReactGA.event({
    category: 'Watch them now button',
    action: 'click',
    label: 'Webinar',
  });
};

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>
        {'Did you miss our tech webinars on Serverless, GraphQL and more?'}
      </h2>
      <HubspotButton
        gaTracking={trackWebinarClicks}
        className={styles.webinarBtnWrapper}
        hubspotTitle="webinar"
      />
    </div>
  </section>
);
