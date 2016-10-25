import React from 'react';
import styles from './style.css';

const Success = ({ onClose }) => (
  <section className={styles.successContainer}>
    <h2 className={styles.heading}>
      Got it! Thanks
    </h2>
    <button
      className={styles.closeButton}
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
