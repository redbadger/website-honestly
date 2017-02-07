import React from 'react';
import styles from './style.css';
import Principle from './principle';
import Link from '../../../components/link';

export default function Principles() {
  return (
    <div className={styles.principles}>
      <div className={styles.container}>
        <div className={styles.header}>Our principles.</div>
        <div className={styles.thisIsWhatWeBelieveIn}>
          This is what we believe – and what the founders say after a couple of pints
        </div>
        <ul className={styles.principleList}>
          <Principle number="01" title="A team of leaders." description="We trust our people, giving them the autonomy to make the right decisions." />
          <Principle number="02" title="Strong opinions, weakly held." description="This is about having a point of view, speaking up, being decisive and authoritative – without being dogmatic or belligerent." />
          <Principle number="03" title="Always learning." description="We quickly get to something we can test and iterate on. We’re also all looking to learn and grow in what we do." />
          <Principle number="04" title="Do stuff that matters." description="We’re focused. We prioritise. We work on things that will make a difference. We don’t do fluff. It’s also about doing work that is fulfilling." />
          <Principle number="05" title="Work smarter." description="We look for ways to be faster, smarter, more efficient and effective. But we don’t do long hours, we respect each other’s time." />
          <Principle number="06" title="Tell it like it is." description="We’re honest, approachable and down-to-earth. We don’t sell, or spin. This is also about good communication, making sure we have a shared understanding." />
          <Principle number="07" title="It’s about people." description="We’re empathetic. We put people at the centre. We’re driven by user value, user-centered design and accessibility. We encourage mutual respect, growth and development." />
          <Principle number="08" title="Give a monkey’s. Don’t be a jackass." description="We care about what we do and we care about each other. We’re humble. No egos." />
        </ul>
        <div className={styles.buttons}>
          <Link to="badgers" className={styles.link}>Meet our team</Link>
          <Link to="joinUs" className={styles.link}>Join us</Link>
        </div>
      </div>
    </div>
  );
}
