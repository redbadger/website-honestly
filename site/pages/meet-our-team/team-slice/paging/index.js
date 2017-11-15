// @flow
import React from 'react';
import Link from '../../../../components/link';
import styles from './style.css';

type PagingProps = {
  page: number,
  count: number,
};

const Paging = ({ page, count }: PagingProps) => (
  <div className={styles.paging}>
    <Link
      to="badgers"
      includeCurrentData
      className={styles.pagingButton}
      navigationData={{ page: Math.max(page - 1, 1) }}
      disableActive
    >
      Previous page
    </Link>
    <Link
      to="badgers"
      includeCurrentData
      className={styles.pagingButton}
      navigationData={{ page: Math.min(Math.ceil(count / 20), page + 1) }}
      disableActive
    >
      Next page
    </Link>
  </div>
);

export default Paging;
