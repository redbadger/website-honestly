import React from 'react';
import ReactGA from 'react-ga';
import styles from '../style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const webinarLink = 'https://www.youtube.com/playlist?list=PLW6ORi0XZU0DF9rlBzgro6YGTTm5DfPjb';

export default () => (
  <section className={styles.webinar}>
    <div className={styles.webinarInner}>
      <h2 className={styles.webinarText}>
        {'Did you miss our tech webinars on serverless, graphql and more?'}
      </h2>
      <a
        className={styles.webinarButton}
        href={webinarLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-technology page -button')}
      >
        Watch them now
      </a>
    </div>
  </section>
);
