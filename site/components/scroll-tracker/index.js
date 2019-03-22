// @flow

import * as React from 'react';
import throttle from 'lodash.throttle';
import ReactGA from 'react-ga';

import { logScrollDepth } from '../../tracking/amplitude';

class ScrollTracker extends React.Component<{ children: React.Node }> {
  static THROTTLE_MS = 50;

  static scrollPercentage() {
    const scrollHeight = document.documentElement ? document.documentElement.scrollHeight : 0;
    const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    return Math.round((scrollY / (scrollHeight - window.innerHeight)) * 100);
  }

  static logScroll(scrollPercentage: number) {
    ReactGA.event({
      category: `Page scroll depth`,
      action: 'scroll',
      label: '' + scrollPercentage,
    });
    logScrollDepth(scrollPercentage);
  }

  componentDidMount() {
    const handler = throttle(this.scrollHandler, ScrollTracker.THROTTLE_MS);
    this.handler = handler;
    window.addEventListener('scroll', handler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);
    this.handler = () => {};
  }

  handler: Function;

  thresholds = [[0, 25], [25, 50], [50, 75], [75, 100], [100, 100]];

  scrollHandler = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();
    const removeThreshold = i => {
      this.thresholds = [...this.thresholds.slice(0, i), ...this.thresholds.slice(i + 1)];
    };

    this.thresholds.forEach((threshold, i) => {
      const [low, high] = threshold;

      if (
        (low < scrollPercentage && high >= scrollPercentage) ||
        (low === scrollPercentage && high === scrollPercentage)
      ) {
        ScrollTracker.logScroll(low);
        removeThreshold(i);
      }
    });
  };

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ScrollTracker;
