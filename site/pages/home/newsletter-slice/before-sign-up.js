import React from 'react';
import styles from './style.css';

const BeforeSignUp = props => (
  <section className={styles.newsletter}>
    <h1 className={styles.title}>
      Sign up to BadgerNews to hear more from us
    </h1>
    <p className={styles.subTitle}>
      (every 6 weeks or so)
    </p>

    <form className={styles.form}>
      <label htmlFor="email" className={styles.formLabel}>Email</label>
      <input id="email" type="text" placeholder="example@email.com" className={styles.formInput} />
      <button className={styles.submitButton} onClick={props.onSubmit}>Sign up</button>
    </form>

    <noscript>
      <p className={styles.jsDisabled}>
        It seems like your javascript is disabled.
        Please use the link here to sign up for our newsletter.
      </p>
      <a href="http://eepurl.com/bibY5P" className={styles.link}>
        Sign up through MailChimp
      </a>
    </noscript>
  </section>
);

const { func } = React.PropTypes;
BeforeSignUp.propTypes = {
  onSubmit: func.isRequired,
};

export default BeforeSignUp;
