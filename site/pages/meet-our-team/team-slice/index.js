import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../components/link';
import styles from './style.css';

import arrowSVG from './arrow.svg';
import placeholderBlack from './placeholder-black.jpg';
import placeholderWhite from './placeholder-white.jpg';

const paginate = (badgers, page, loadAll) => {
  const pageSize = loadAll ? badgers.length : 20;
  const start = (page - 1) * pageSize;
  return badgers.slice(start, start + pageSize);
};

const getPlaceholderImage = () => (Math.random() >= 0.5 ? placeholderBlack : placeholderWhite);

const getDistance = el => {
  let distance = 0;
  let element = el;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return distance;
};

const BadgerProfile = ({ badger }) => (
  <Link to="badger" navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
    <img
      src={badger.loaded ? badger.imageUrl : getPlaceholderImage()}
      alt={badger.name}
      className={styles.badgerImage}
    />
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
    <div className={styles.hiring}>Were hiring</div>
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
    this.state = {
      loadAll: false,
      badgers: props.badgers.map((badger, i) => ({ ...badger, loaded: i < props.page * 20 })),
    };
    this.calculateLoaded = this.calculateLoaded.bind(this);
    this.els = {};
  }

  componentDidMount() {
    this.raf = requestAnimationFrame(this.calculateLoaded);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  calculateLoaded() {
    const { badgers, loadAll } = this.state;
    const { page } = this.props;
    const isLoaded = (badger, i) => badger.loaded || getDistance(this.els[i]) < window.scrollY;
    let loadedChanged = false;
    const updatedBadgers = badgers.map((badger, i) => {
      const loaded = isLoaded(badger, i);
      loadedChanged = loadedChanged || badger.loaded !== loaded;
      return { ...badger, loaded };
    });
    if (loadedChanged || !loadAll) {
      this.setState({ badgers: updatedBadgers, loadAll: true });
    }
    this.raf = requestAnimationFrame(this.calculateLoaded);
  }

  render() {
    const { page } = this.props;
    const { loadAll, badgers } = this.state;
    return (
      <div>
        <ul className={styles.badgers}>
          {paginate(badgers, page, loadAll).map((badger, i) =>
            <li ref={el => { this.els[i] = el; }} key={i} className={styles.badger}>
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
