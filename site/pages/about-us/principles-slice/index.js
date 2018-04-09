import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';
import Principle from './principle';
import Link from '../../../components/link';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'AboutUs-JoinUs',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

export default function Principles() {
  return (
    <div className={styles.principles}>
      <div className={styles.container}>
        <h1 className={styles.header}>Our principles.</h1>
        <div className={styles.thisIsWhatWeBelieveIn}>
          This is what we believe – and what the founders say after a couple of pints
        </div>
        <ul className={styles.principleList}>
          <Principle
            number="01"
            title="People people."
            description="Our work is built on the respect we have for each other and our clients. We’re also very focused on the needs of our clients’ customers."
          />
          <Principle
            number="02"
            title="Find a way."
            description="As individuals we need to be proactive and to earn and build the trust of our clients."
          />
          <Principle
            number="03"
            title="Always learning."
            description="We’re curious. It’s how we learn and grow as individuals, continuously testing and improving what we do, and how we do it."
          />
          <Principle
            number="04"
            title="Honest."
            description="We’re relied upon to tell things as they are. We do so in an approachable and down-to-earth manner."
          />
          <Principle
            number="05"
            title="Strong opinions, weakly held."
            description="Clear points-of-view help give our work direction and purpose – but we’re humble about these. We don’t let ego get in the way."
          />
        </ul>
        <div className={styles.buttons}>
          <Link to="badgers" className={styles.link}>
            Meet our team
          </Link>
          <Link to="joinUs" className={styles.link}>
            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
            <span onClick={trackAnalytics('Join Us')}>Join us</span>
            {/* eslint-enable jsx-a11y/no-static-element-interactions */}
          </Link>
        </div>
      </div>
    </div>
  );
}
