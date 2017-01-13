import React from 'react';
import InlineSVG from 'svg-inline-react';
import Link from '../../../components/link';
import styles from './style.css';

import arrowSVG from './arrow.svg';
import placeholderBlack from './placeholder-black.jpg';
import placeholderWhite from './placeholder-white.jpg';

const paginate = (badgers, page, loadAll) => {
  if (loadAll) return badgers;
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const getPlaceholderImage = () => (Math.random() >= 0.5 ? placeholderBlack : placeholderWhite);

const inView = el => {
  let distance = 0;
  let element = el;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return (distance !== 0) && (distance < (scrollY + innerHeight + -50));
};

const BadgerProfile = ({ badger }) => (
  <Link to="badger" navigationData={{ name: badger.slug }} className={styles.badgerProfile}>
    <img
      src={badger.loaded ? badger.imageUrl : badger.placeholderImage}
      alt={badger.name}
      className={styles.badgerImage}
    />
    <div className={styles.skillsWrapper}>
      <h3 className={styles.skillsHeading}>
        Signature skills
      </h3>
      <ul className={styles.skills}>
        {(badger.skills || []).map((skill, i) => <li key={i}>{skill}</li>)}
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

const initBadgers = (badgers, page) => (
  badgers.map((badger, i) => ({
    ...badger,
    placeholderImage: getPlaceholderImage(),
    loaded: i < page * 20,
  }))
);

class TeamSlice extends React.Component {
  constructor(props) {
    super(props);
    const { badgers, page } = props;
    this.state = { loadAll: false, badgers: initBadgers(badgers, page) };
    this.els = {};
    this.calculateLoaded = this.calculateLoaded.bind(this);
  }

  componentDidMount() {
    this.raf = requestAnimationFrame(this.calculateLoaded);
  }

  componentWillReceiveProps(nextProps) {
    const { badgers, page } = nextProps;
    this.setState({ badgers: initBadgers(badgers, page) });
    this.els = {};
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  calculateLoaded() {
    const { badgers, loadAll } = this.state;
    let loadedChanged = false;
    const updatedBadgers = badgers.map((badger, i) => {
      const loaded = badger.loaded || inView(this.els[i]);
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
