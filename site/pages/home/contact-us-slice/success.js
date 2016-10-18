import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import Cain from '../../../components/cain';

const cx = classnames.bind(styles);

const Success = ({ onClose }) => (
  <section className={styles.successContainer}>
    <Cain
      says="Got it! Thanks"
      goodNews
    />
    <button
      className={cx(['button', 'closeButton'])}
      onClick={e => {
        e.preventDefault();
        onClose();
      }}
    >
      Close
    </button>
  </section>
);

const { func } = React.PropTypes;
Success.propTypes = {
  onClose: func.isRequired,
};

export default Success;
