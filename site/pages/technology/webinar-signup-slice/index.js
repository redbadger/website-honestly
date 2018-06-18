// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

import React from 'react';
import ReactGA from 'react-ga';
import styles from '../style.css';

import hubspotButtons from '../hubspot-buttons';
import logAmplitudeEvent from '../../../tracking/amplitude';

const trackAnalytics = title => () => {
  logAmplitudeEvent('CLICK WATCH WEBINAR');
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });
};

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>
        {'Did you miss our tech webinars on Serverless, GraphQL and more?'}
      </h2>
      <div
        className={`${styles.hubspotBtn} ${styles.webinarBtnWrapper}`}
        onClick={trackAnalytics('Webinar-technology page -button')}
        dangerouslySetInnerHTML={hubspotButtons.webinar}
      />
    </div>
  </section>
);
