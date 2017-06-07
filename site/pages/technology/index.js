import React from 'react';
import ReactGA from 'react-ga';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

import techRoundTableImage from './images/techroundtable.png';
import arrowSVG from '../../../assets/images/SVG/arrow.svg';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

export default () =>
  <div className={styles.technologyPage}>
    <section className={styles.intro}>
      <section className={styles.leftContent}>
        <div className={styles.innerContainer}>
          <h1 className={styles.mainHeader}>Technology</h1>
          <p className={styles.description}>
            Technology does not stand still and neither do we. On a regular basis we get our whole
            tech team together and review all the tech we have used across all our projects to
            derive what is hot and what is not in our world of tech.
          </p>
          <a className={styles.latestRoundTableLink}>
            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
            <span onClick={trackAnalytics('RoundtablePDFLink')}>
              Read our latest tech round table
            </span>
            {/* eslint-enable jsx-a11y/no-static-element-interactions */}
          </a>
          <InlineSVG src={arrowSVG} className={styles.arrow} />
        </div>
      </section>
      <section className={styles.rightContent}>
        <div className={styles.innerContainer}>
          <img className={styles.techRoundTable} src={techRoundTableImage} alt="tech roundtable" />
        </div>
      </section>
    </section>
  </div>;
