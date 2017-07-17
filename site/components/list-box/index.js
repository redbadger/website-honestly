// @flow
import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

type ListBoxProps = {
  title: string,
  items: Array<Object>,
  itemClassName?: string,
  labelClassName?: string,
  valueClassName?: string,
};

const ListBox = ({ title, items, itemClassName, labelClassName, valueClassName }: ListBoxProps) => {
  return (
    <div className={styles.listBox}>
      <h3 className={styles.listBox__heading}>{title}</h3>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={cx('listBox__element', 'listBox__element--results', itemClassName)}
            >
              <div className={labelClassName}>
                {item.label}
              </div>
              <div className={valueClassName}>
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
