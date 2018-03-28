import React from 'react';
import styles from './style.css';

const scrollIntoView = el => {
  if (el && el.scrollIntoView) {
    el.scrollIntoView();
  }
};

const Success = ({ onClose }) => (
  <section ref={el => scrollIntoView(el)} className={styles.successContainer} id="contactUs">
    <h2 className={styles.heading}>Got it! Thanks</h2>
    <button
      className={styles.closeButton}
      autoFocus
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
