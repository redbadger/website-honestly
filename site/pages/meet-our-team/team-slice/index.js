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

type TeamSliceState = {
  loadAll: boolean,
  badgers: Array<Badger>,
};

class TeamSlice extends React.Component<TeamSliceProps, TeamSliceState> {
  constructor(props: TeamSliceProps) {
    super(props);
    const { badgers, page } = props;
    this.state = { loadAll: false, badgers: initBadgers(badgers, page) };
    this.badgerElements = {};
    this.calculateLoaded = this.calculateLoaded.bind(this);
  }

  componentDidMount() {
    this.requestAnimationFrameId = requestAnimationFrame(this.calculateLoaded);
  }

  // TODO: Rebuild this component, I'm getting code smell here.
  UNSAFE_componentWillReceiveProps(nextProps: TeamSliceProps) {
    const { badgers, page } = nextProps;
    this.setState({ badgers: initBadgers(badgers, page) });
    this.badgerElements = {};
  }
  /* eslint-enable camelcase */

  componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrameId);
  }

  badgerElements: any;

  /*
    Upgrading Babel 7 has caused an issue with flow:
    https://github.com/babel/babel/issues/8417
    The method below is being defined later on in the components source code,
    but, at the time this file gets compiled by babel,
    and @babel/preset-flow is applied, the method gets initialized with void 0,
    it does't matter loose: true or loose: false,
    in the end its value will be void 0.
    Having that in mind, at the time
    this._calculateLoaded = this._calculateLoaded.bind(this); runs,
    this.calculateLoaded has been set with void 0, which causes:
    TypeError: Cannot read property 'bind' of undefined
    the syntax below is a workaround hopefully later versions 
    of @babel/preset-flow will fix thi
  */
  calculateLoaded: Function = this.calculateLoaded;

  requestAnimationFrameId: AnimationFrameID;

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
