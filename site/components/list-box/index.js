import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

type ListBoxProps = {
  title: String,
  items: Array<Object>,
};

const ListBox = ({ title, items }: ListBoxProps) => {
  return (
    <div className={styles.listBox}>
      <h3 className={styles.listBox__heading}>{title}</h3>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} className={cx('listBox__element', 'listBox__element--results')}>
              <div>
                {item.label}
              </div>
              <div>
                {item.value}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBox;
