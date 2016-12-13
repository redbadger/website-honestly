import React from 'react';
import styles from './style.css';


const Button = ({ label, background, onClick }) => {
  let className;
  switch (background) {
    case 'black':
      className = styles.dark;
      break;
    case 'yellow':
      className = styles.yellow;
      break;
    default:
      className = styles.light;
      break;
  }

  return <button className={className} onClick={onClick}>{label}</button>;
};

Button.propTypes = {
  label: React.PropTypes.string,
  background: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Button;
