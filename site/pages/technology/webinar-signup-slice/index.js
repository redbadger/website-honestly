// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

import React from 'react';
import styles from '../style.css';

import hubspotButtons from '../hubspot-buttons';
import logAmplitudeEvent from '../../../tracking/amplitude';

const trackAnalytics = () => () => {
  logAmplitudeEvent('CLICK WATCH WEBINAR');
};

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>
        {'Did you miss our tech webinars on Serverless, GraphQL and more?'}
      </h2>
      <div
        className={`${styles.hubspotBtn} ${styles.webinarBtnWrapper}`}
        onClick={trackAnalytics()}
        dangerouslySetInnerHTML={hubspotButtons.webinar}
      />
    </div>
  </section>
);
