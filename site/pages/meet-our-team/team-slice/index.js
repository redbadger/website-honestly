import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../components/link';
import styles from './style.css';

import arrowSVG from './arrow.svg';

const paginate = (badgers, page, loadAll) => {
  const pageSize = loadAll ? badgers.length : 20;
  const start = (page - 1) * pageSize;

  return badgers.slice(start, start + pageSize).map(b => ({ ...b, loaded: true }));
};

const BadgerProfile = ({ badger }) => (
  <Link to="badger" navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
    <img src={badger.imageUrl} alt={badger.name} className={styles.badgerImage} />
    <div className={styles.skillsWrapper}>
      <h3 className={styles.skillsHeading}>
        Signature skills
      </h3>
      <ul className={styles.skills}>
        {(badger.skills || []).map(skill => <li>{skill}</li>)}
      </ul>
    </div>
    <div className={styles.description}>
      <div className={styles.name}>
        {badger.name}
        <InlineSVG src={arrowSVG} className={styles.arrow} />
      </div>
      <div className={styles.jobDescription}>{badger.jobTitle}</div>
    </div>
  </Link>
);

const JobAdvert = () => (
  <Link to="joinUs" className={styles.jobAdvert}>
    <div className={styles.question}>Are you a potential Badger?</div>
    <div className={styles.hiring}>We're hiring</div>
  </Link>
);

const Paging = ({ page, badgers }) => (
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
      navigationData={{ page: Math.min(Math.ceil(badgers.length / 20), page + 1) }}
      disableActive
    >
      Next page
    </Link>
  </div>
);

class TeamSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadAll: false };
  }

  componentDidMount() {
    this.setState({ loadAll: true });
  }

  render() {
    const { badgers, page } = this.props;
    const { loadAll } = this.state;
    return (
      <div>
        <ul className={styles.badgers}>
          {paginate(badgers, page, loadAll).map((badger, i) =>
            <li key={i} className={styles.badger}>
              <div className={styles.badgerWrapper} >
                {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
              </div>
            </li>
          )}
        </ul>
        {!loadAll && <Paging page={page} badgers={badgers} />}
      </div>
    );
  }
}

export default TeamSlice;
