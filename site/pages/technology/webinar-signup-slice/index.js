import React from 'react';
import ReactGA from 'react-ga';
import styles from '../style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const webinarLink = 'http://bit.ly/2h7jvFN';

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>{'Missed our webinar on Serverless and GraphQL?'}</h2>
      <a
        className={styles.webinarButton}
        href={webinarLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-technology page -button')}
      >
        Watch it now
      </a>
    </div>
  </section>
);
