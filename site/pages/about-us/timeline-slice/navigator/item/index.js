import React from 'react';
import styles from './style.css';

const TimelineNav = ({ value, onClick, currentIndex, children }) => {
  let className = styles.old;
  if (value === currentIndex) {
    className = styles.active;
  }

  if (value > currentIndex) {
    className = styles.future;
  }

  const click = () => onClick(value);

  return <button tabIndex={0} className={className} onClick={click}><a className={styles.text}>{children}</a></button>;
};


TimelineNav.propTypes = {
  value: React.PropTypes.number.isRequired,
  currentIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.string.isRequired,
};

export default TimelineNav;
