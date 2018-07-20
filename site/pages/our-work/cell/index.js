// @flow
import React from 'react';
import classnames from 'classnames/bind';
import Link from '../../../components/link';
import styles from './style.css';

const cx = classnames.bind(styles);

type Props = {
  clientName: string,
  clientLogo: string,
  image?: string,
  headerText: string,
  descriptionText: string,
  routeKey: string,
};

const Image = ({ image, clientName }: { image?: string, clientName: string }) => {
  return image ? (
    <img src={image} className={styles.clientImage} alt={`${clientName} project`} />
  ) : null;
};

export default function Cell(props: Props) {
  return (
    <div className={cx('cell', `cell-${props.clientName}`)}>
      <div className={styles.caseStudyContentContainer}>
        <div className={styles.caseStudyContent}>
          <Link to={props.routeKey}>
            <Image image={props.image} clientName={props.clientName} />
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
