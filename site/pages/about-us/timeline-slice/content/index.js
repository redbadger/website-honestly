import React from 'react';
import styles from './style.css';
import Counter from './counter';

const Content = ({ title, text, image, counters, flip }) => {
  const topRowClassName = flip ? styles.topRowFlipped : styles.topRow;

  return (
    <div className={styles.content}>
      <div className={styles.largeScreen}>
        <div className={topRowClassName}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.copy}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{text}</div>
          </div>
        </div>
        <div className={styles.counterRow}>
          {counters.map((item, idx) => <Counter key={idx} title={item.title} value={item.value} />)}
        </div>
      </div>
      <div className={styles.smallScreen}>
        <div className={topRowClassName}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.copy}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{text}</div>
          </div>
        </div>
        <div className={styles.counterRow}>
          {counters.map((item, idx) => <Counter key={idx} title={item.title} value={item.value} />)}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  counters: React.PropTypes.array,
  flip: React.PropTypes.bool,
};

export default Content;
