import React from 'react';
import styles from './style.css';

const Arrow = ({ direction, onClick, currentIndex }) => {
  const click = () => {
    let newIndex = currentIndex;
    if (direction === 'left' && currentIndex > 0) newIndex = currentIndex - 1;
    else if (direction === 'right' && currentIndex < 6) newIndex = currentIndex + 1;
    onClick(newIndex);
  };

  return (
    <button
      className={direction === 'left' ? styles.arrowLeft : styles.arrowRight}
      onClick={click}
    >
      <div />
      <div className={styles.innerArrow} />
    </button>
  );
};

Arrow.propTypes = {
  direction: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  currentIndex: React.PropTypes.number.isRequired,
};

export default Arrow;
