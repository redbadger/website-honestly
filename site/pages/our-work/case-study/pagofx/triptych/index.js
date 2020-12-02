// @flow

import * as React from 'react';
import styles from './styles.css';

import left from './images/left.png';
import middle from './images/middle.png';
import right from './images/right.png';

class Triptych extends React.Component<{}, { activeImg: number }> {
  static wrapperClasses = [styles.wrapperLeft, styles.wrapper, styles.wrapperRight];

  static activeClass = (current: number, activeImg: number) =>
    `${styles.fakeControl} ${activeImg === current ? styles.fakeControlActive : ''}`;

  constructor(props: {}) {
    super(props);

    this.state = {
      activeImg: 1,
    };

    this.node = React.createRef();
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.lockTouch = this.lockTouch.bind(this);
    this.endTouch = this.endTouch.bind(this);
  }

  // https://github.com/facebook/react/issues/9809
  componentDidMount() {
    this.node.current.ontouchstart = this.lockTouch;
    this.node.current.ontouchend = this.endTouch;
  }

  node: any;

  touchStartX: number;

  handleRadioChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    this.setState({ activeImg: +value });
  };

  lockTouch = (e: SyntheticTouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.touchStartX = e.changedTouches[0].clientX;
  };

  endTouch = (e: SyntheticTouchEvent<HTMLDivElement>) => {
    e.preventDefault();

    const touchEndX = e.changedTouches[0].clientX;
    const { activeImg } = this.state;

    if (touchEndX > this.touchStartX) {
      this.setState({ activeImg: activeImg === 0 ? 0 : activeImg - 1 });
    } else if (this.touchStartX > touchEndX) {
      this.setState({ activeImg: activeImg === 2 ? 2 : activeImg + 1 });
    }

    this.node.current.style.transform = null;
  };

  renderRadioBtn(i: number, active: number) {
    return (
      <label key={i}>
        <span className={Triptych.activeClass(i, active)} />
        <span className={styles.controlsLabel}>First</span>
        <input
          className={styles.controlsInput}
          type="radio"
          name="image"
          value={i}
          onChange={this.handleRadioChange}
        />
      </label>
    );
  }

  render() {
    const { activeImg } = this.state;
    const wrapperClass = Triptych.wrapperClasses[activeImg];

    return (
      <div>
        <div ref={this.node} className={wrapperClass}>
          <img
            className={styles.leftImg}
            src={left}
            // TODO: Change alt
            alt="Phone with the Pride app on in screen displaying a map, text reads: 'Easily find bars and events on the day'"
          />
          <img
            className={styles.middleImg}
            src={middle}
            // TODO: Change alt
            alt="Phone with the Pride app on in screen displaying a list of events, text reads: 'Plan your perfect festival with ease and love'"
          />
          <img
            className={styles.rightImg}
            src={right}
            // TODO: Change alt
            alt="Phone with the Pride app on in screen displaying a list of event categories, text reads: 'Find diverse experiences from cabaret to films'"
          />
        </div>

        <div>
          <form action="" className={styles.controls}>
            {[0, 1, 2].map(i => this.renderRadioBtn(i, activeImg))}
          </form>
        </div>
      </div>
    );
  }
}

export default Triptych;
