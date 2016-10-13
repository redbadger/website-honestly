import React from 'react';
import styles from './style.css';

import BeforeSignUpTitles from './before-sign-up-titles';

const BeforeSignUp = props => (
  <section className={styles.newsletter}>
    <BeforeSignUpTitles />
    <form className={styles.form}>
      <label htmlFor="email" className={styles.formLabel}>Email</label>
      <input id="email" type="text" placeholder="example@email.com" className={styles.formInput} />
      <button className={styles.submitButton} onClick={props.onSubmit}>Sign up</button>
    </form>
  </section>
);

const { func } = React.PropTypes;
BeforeSignUp.propTypes = {
  onSubmit: func.isRequired,
};

export default BeforeSignUp;
