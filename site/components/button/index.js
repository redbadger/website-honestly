import React from 'react';
import styles from './style.css';


const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: React.PropTypes.string,
};

export default Button;
