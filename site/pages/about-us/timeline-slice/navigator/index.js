import React from 'react';
import styles from './style.css';
import Item from './item';
import Arrow from './arrow';

const TimelineNav = ({ currentIndex, onClick }) => {
  let scale = 0;
  switch (currentIndex) {
    case 0:
      scale = '0%';
      break;
    case 1:
      scale = '16%';
      break;
    case 2:
      scale = '33%';
      break;
    case 3:
      scale = '49%';
      break;
    case 4:
      scale = '66%';
      break;
    case 5:
      scale = '82%';
      break;
    case 6:
      scale = '100%';
      break;
    default:
  }

  return (
    <div className={styles.navigator}>
      <div className={styles.container}>
        <Arrow direction="left" onClick={onClick} currentIndex={currentIndex} />
        <div className={styles.timeline}>
          <Item value={0} onClick={onClick} currentIndex={currentIndex} />
          <Item value={1} onClick={onClick} currentIndex={currentIndex} />
          <Item value={2} onClick={onClick} currentIndex={currentIndex} />
          <Item value={3} onClick={onClick} currentIndex={currentIndex} />
          <Item value={4} onClick={onClick} currentIndex={currentIndex} />
          <Item value={5} onClick={onClick} currentIndex={currentIndex} />
          <Item value={6} onClick={onClick} currentIndex={currentIndex} />
        </div>
        <div className={styles.fillingLine} style={{ width: `${scale}` }} />
        <Arrow direction="right" onClick={onClick} currentIndex={currentIndex} />
      </div>
    </div>
  );
};


TimelineNav.propTypes = {
  currentIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default TimelineNav;
