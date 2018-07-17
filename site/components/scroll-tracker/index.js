// @flow

import * as React from 'react';
import throttle from 'lodash.throttle';
import ReactGA from 'react-ga';

import { logScrollDepth } from '../../tracking/amplitude';

class ScrollTracker extends React.Component<{ children: React.Node }> {
  static THROTTLE_MS = 100;

  static scrollPercentage() {
    const scrollHeight = document.documentElement ? document.documentElement.scrollHeight : 0;
    const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    return Math.round((scrollY / (scrollHeight - window.innerHeight)) * 100);
  }

  static logScroll(scrollPercentage: number) {
    ReactGA.event({
      category: `Page scroll depth`,
      action: 'scroll',
      value: scrollPercentage,
    });
    logScrollDepth(scrollPercentage);
  }

  componentDidMount() {
    this.listener = throttle(this.log0ScrollDepth, ScrollTracker.THROTTLE_MS);
    window.addEventListener('scroll', this.listener);
  }

  listener = null;

  swapListeners(newListener: Function) {
    window.removeEventListener('scroll', this.listener);
    this.listener = throttle(newListener, ScrollTracker.THROTTLE_MS);
    window.addEventListener('scroll', this.listener);
  }

  log100ScrollDepth = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();

    if (scrollPercentage >= 100) {
      ScrollTracker.logScroll(100);
      window.removeEventListener('scroll', this.listener);
    }
  };

  log75ScrollDepth = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();

    if (scrollPercentage >= 75 && scrollPercentage < 100) {
      ScrollTracker.logScroll(75);
      this.swapListeners(this.log100ScrollDepth);
    }
  };

  log50ScrollDepth = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();

    if (scrollPercentage >= 50 && scrollPercentage < 75) {
      ScrollTracker.logScroll(50);
      this.swapListeners(this.log75ScrollDepth);
    }
  };

  log25ScrollDepth = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();

    if (scrollPercentage >= 25 && scrollPercentage < 50) {
      ScrollTracker.logScroll(25);
      this.swapListeners(this.log50ScrollDepth);
    }
  };

  log0ScrollDepth = () => {
    const scrollPercentage = ScrollTracker.scrollPercentage();

    if (scrollPercentage < 25) {
      ScrollTracker.logScroll(0);
      this.swapListeners(this.log25ScrollDepth);
    }
  };

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ScrollTracker;
