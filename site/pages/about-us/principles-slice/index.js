import React from 'react';
import styles from './style.css';
import Principle from './principle';
import Link from '../../../components/link';

export default function Principles() {
  return (
    <div className={styles.principles}>
      <div className={styles.container}>
        <h1 className={styles.header}>Our values.</h1>
        <ul className={styles.principleList}>
          <Principle
            number="01"
            title="People people."
            description="We respect and care for each other, giving us the space to feel safe and be our true selves"
          />
          <Principle
            number="02"
            title="Find a way."
            description="We’re comfortable with uncertainty and accountability, whilst achieving great outcomes through shared goals"
          />
          <Principle
            number="03"
            title="Always learning."
            description="We’re curious. It’s how we learn and grow as individuals, continuously testing and improving what we do, and how we do it"
          />
          <Principle
            number="04"
            title="Open &amp; fair"
            description="We build trust by telling things as they are, being open, and seeking to achieve fair and equitable outcomes"
          />
          <Principle
            number="05"
            title="Collaborative"
            description="We are united by our desire to get to the best ideas. We are generous with our knowledge, actively listen to each other, and are open minded"
          />
        </ul>
        <div className={styles.buttons}>
          <Link to="badgers" className={styles.link}>
            Meet our team
          </Link>
          <Link to="joinUs" className={styles.link}>
            Join us
          </Link>
        </div>
      </div>
    </div>
  );
}
