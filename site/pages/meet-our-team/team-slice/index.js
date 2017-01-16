// @flow
/* eslint-disable react/no-set-state */
import React from 'react';
import styles from './style.css';
import BadgerProfile from './badger-profile';
import JobAdvert from './job-advert';
import Paging from './paging';
import type { Badger } from './badger-profile';

import placeholderBlack from './placeholder-black.jpg';
import placeholderWhite from './placeholder-white.jpg';

const paginate = (badgers, page, loadAll) => {
  if (loadAll) return badgers;
  const start = (page - 1) * 20;
  return badgers.slice(start, start + 20);
};

const inView = el => {
  let distance = 0;
  let element = el;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return (distance !== 0) && (distance < (window.scrollY + window.innerHeight + -50));
};

const initBadgers = (badgers, page) => (
  badgers.map((badger, i) => ({
    ...badger,
    placeholderImage: (Math.random() >= 0.5 ? placeholderBlack : placeholderWhite),
    loaded: i < page * 20,
  }))
);

type TeamSliceProps = {
  page: number,
  badgers: Array<Badger>,
};

class TeamSlice extends React.Component {
  constructor(props: TeamSliceProps) {
    super(props);
    const { badgers, page } = props;
    this.state = { loadAll: false, badgers: initBadgers(badgers, page) };
    this.els = {};
    this.calculateLoaded = this.calculateLoaded.bind(this);
  }

  state: {
    loadAll: boolean,
    badgers: Array<Badger>,
  };

  componentDidMount() {
    this.raf = requestAnimationFrame(this.calculateLoaded);
  }

  componentWillReceiveProps(nextProps: TeamSliceProps) {
    const { badgers, page } = nextProps;
    this.setState({ badgers: initBadgers(badgers, page) });
    this.els = {};
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  els: any;
  calculateLoaded: () => void;
  raf: number;

  calculateLoaded() {
    const { badgers, loadAll } = this.state;
    let loadedChanged = false;
    const updatedBadgers = badgers.map(badger => {
      const loaded = badger.loaded || inView(this.els[badger.slug]);
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
            <li
              key={i}
              className={styles.badger}
              ref={el => {
                if (el) {
                  this.els[badger.slug] = el;
                }
              }}
            >
              <div className={styles.badgerWrapper} >
                {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
              </div>
            </li>
          )}
        </ul>
        {!loadAll && <Paging page={page} count={badgers.length} />}
      </div>
    );
  }
}

export default TeamSlice;
