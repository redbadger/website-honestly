// @flow
import * as React from 'react';
import classnames from 'classnames/bind';
import Link from '../../../../components/link';
import styles from '../style.css';

const cx = classnames.bind(styles);

type Props = {
  clientName: string,
  clientLogo: string,
  image?: string,
  headerText: string,
  descriptionText: string,
  routeKey: string,
};

export default function Cell(props: Props) {
  const displayImg = props.image ? (
    <img src={props.image} className={styles.clientImage} alt={`${props.clientName} project`} />
  ) : null;

  return (
    <div className={cx('cell', `cell-${props.clientName}`)}>
      <div className={styles.caseStudyContentContainer}>
        <div className={styles.caseStudyContent}>
          <Link to={props.routeKey}>
            {displayImg}
            <img
              src={props.clientLogo}
              className={styles[`logo${props.clientName}`]}
              alt={`${props.clientName} logo`}
            />
            <h2 className={props.image ? styles.normalHeader : styles.largeHeader}>
              {props.headerText}
            </h2>
            <p className={styles.description}>{props.descriptionText}</p>
            <div className={styles.links}>
              <p className={styles.readmore}>Read more</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
