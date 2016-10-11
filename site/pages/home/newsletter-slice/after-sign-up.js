import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

const AfterSignUp = props => (
  <section className={cx('newsletter', 'submitted')}>
    <h1 className={styles.title}>
      Thanks for signing up!
    </h1>
    <h2 className={styles.subTitle}>
      Help us make sure your BadgerNews is relevant by telling us a bit more about yourself
    </h2>
    <form>
      <div>
        <label htmlFor="name" className={styles.formLabel}>Full name</label>
        <input id="name" type="text" placeholder="John Smith" className={styles.formInput} />
      </div>
      <div>
        <label htmlFor="name" className={styles.formLabel}>Company</label>
        <input id="name" type="text" placeholder="Peter Pan Ltd." className={styles.formInput} />
      </div>
      <div>
        <label htmlFor="name" className={styles.formLabel}>Job role</label>
        <input id="name" type="text" placeholder="Engineer" className={styles.formInput} />
      </div>
      <button className={styles.submitButton} onClick={props.onSubmit}>Update info</button>
    </form>
  </section>
);

const { func } = React.PropTypes;
AfterSignUp.propTypes = {
  onSubmit: func.isRequired,
};

export default AfterSignUp;
