import React from 'react';
import styles from './style.css';

const ContactUs = () => (
  <section className={styles.contactUsContainer}>
    <h2 className={styles.heading}>
      We don’t have a sales team.
      <br />
      Speak to one of our founders.
    </h2>

    <form className={styles.contactUsForm} action="/hello" method="post">
      <label className={styles.formLabel} htmlFor="message">Message:</label>
      <textarea
        rows="6"
        className={styles.inputBox}
        name="message"
        defaultValue={'Hi Cain,\nI was wondering…'}
      />
      <label className={styles.formLabel} htmlFor="contact">Your email or phone:</label>
      <input className={styles.inputBox} name="contact" type="text" />
      <button type="submit" className={styles.submitBtn}>Submit</button>
    </form>
  </section>
);

export default ContactUs;
