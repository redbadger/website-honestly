// @flow

import * as React from 'react';
import styles from './styles.css';

class Triptych extends React.Component<
  {},
  {
    activeImg: number,
    srcImageLeft: string,
    srcImageMiddle: string,
    srcImageRight: string,
    altImageLeft: string,
    altImageMiddle: string,
    altImageRight: string,
  },
> {
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
          <picture>
            <img
              className={styles.leftImg}
              src={this.props.srcImageLeft}
              alt={this.props.altImageLeft}
            />
          </picture>
          <picture>
            <img
              className={styles.middleImg}
              src={this.props.srcImageMiddle}
              alt={this.props.altImageMiddle}
            />
          </picture>
          <picture>
            <img
              className={styles.rightImg}
              src={this.props.srcImageRight}
              alt={this.props.altImageRight}
            />
          </picture>
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
