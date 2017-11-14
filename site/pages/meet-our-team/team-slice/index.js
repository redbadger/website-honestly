// @flow
import React from 'react';
import styles from './style.css';
import BadgerProfile from './badger-profile';
import JobAdvert from './job-advert';
import Paging from './paging';
import type { Badger } from './badger-profile';

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
  return distance !== 0 && distance < window.pageYOffset + window.innerHeight + 50;
};

const initBadgers = (badgers, page) =>
  badgers.map((badger, i) => ({
    ...badger,
    loaded: i < page * 20,
  }));

type TeamSliceProps = {
  page: number,
  badgers: Array<Badger>,
};

class TeamSlice extends React.Component {
  constructor(props: TeamSliceProps) {
    super(props);
    const { badgers, page } = props;
    this.state = { loadAll: false, badgers: initBadgers(badgers, page) };
    this.badgerElements = {};
    this.calculateLoaded = this.calculateLoaded.bind(this);
  }

  state: {
    loadAll: boolean,
    badgers: Array<Badger>,
  };

  componentDidMount() {
    this.requestAnimationFrameId = requestAnimationFrame(this.calculateLoaded);
  }

  componentWillReceiveProps(nextProps: TeamSliceProps) {
    const { badgers, page } = nextProps;
    this.setState({ badgers: initBadgers(badgers, page) });
    this.badgerElements = {};
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrameId);
  }

  badgerElements: any;
  calculateLoaded: () => void;
  requestAnimationFrameId: number;

  calculateLoaded() {
    const { badgers, loadAll } = this.state;
    let loadedChanged = false;
    const updatedBadgers = badgers.map(badger => {
      const loaded = badger.loaded || inView(this.badgerElements[badger.slug]);
      loadedChanged = loadedChanged || badger.loaded !== loaded;
      return { ...badger, loaded };
    });
    if (loadedChanged || !loadAll) {
      this.setState({ badgers: updatedBadgers, loadAll: true });
    }
    this.requestAnimationFrameId = requestAnimationFrame(this.calculateLoaded);
  }

  render() {
    const { page } = this.props;
    const { loadAll, badgers } = this.state;
    return (
      <div>
        <ul className={styles.badgers}>
          {paginate(badgers, page, loadAll).map(badger => (
            <li
              key={badger.slug}
              className={styles.badger}
              ref={el => {
                this.badgerElements[badger.slug] = el;
              }}
            >
              {!badger.jobAdvert ? <BadgerProfile badger={badger} /> : <JobAdvert />}
            </li>
          ))}
        </ul>
        {!loadAll && <Paging page={page} count={badgers.length} />}
      </div>
    );
  }
}

export default TeamSlice;
