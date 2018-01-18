import React from 'react';
import styles from './style.css';
import Link from '../../components/link';
import HelpImage from './images/help.png';

const NewContactUs = () => (
  <section className={styles.contactUsContainer}>
    <h2 className={styles.header}>Ways we can help you</h2>
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>Create & validate new ideas</li>
        <li className={styles.item}>Deliver great quality products & services, fast</li>
        <li className={styles.item}>Be bold with technology</li>
        <li className={styles.item}>Be more customer centric</li>
        <li className={styles.item}>Improve efficiency with lean practices</li>
        <li className={styles.item}>Build capability & confidence</li>
      </ul>
      <div className={styles.imgContainer}>
        <img src={HelpImage} alt="Help button" />
      </div>
    </div>
    <Link to="ourWorkPage" className={styles.button}>
      Talk to us
    </Link>
  </section>
);

export default NewContactUs;
