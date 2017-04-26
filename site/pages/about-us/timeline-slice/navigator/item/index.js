import React from 'react';
import styles from './style.css';

const TimelineNav = ({ value, onClick, currentIndex }) => {
  let className = styles.old;
  if (value === currentIndex) {
    className = styles.active;
  }

  if (value > currentIndex) {
    className = styles.future;
  }

  const click = () => onClick(value);

  return (
    <button tabIndex={0} className={className} onClick={click}>
      <span />
    </button>
  );
};


TimelineNav.propTypes = {
  value: React.PropTypes.number.isRequired,
  currentIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default TimelineNav;
