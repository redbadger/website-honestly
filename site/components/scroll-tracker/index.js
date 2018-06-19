import React from 'react';
import { logScrollDepth } from '../../tracking/amplitude';

class ScrollTracker extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.log0ScrollDepth);
  }

  log100ScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY ? window.scrollY : window.pageYOffset) /
        (document.documentElement.scrollHeight - window.innerHeight) *
        100,
    );

    if (scrollPercentage >= 100) {
      logScrollDepth(100);
      window.removeEventListener('scroll', this.log100ScrollDepth);
    }
  };

  log75ScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY ? window.scrollY : window.pageYOffset) /
        (document.documentElement.scrollHeight - window.innerHeight) *
        100,
    );

    if (scrollPercentage >= 75 && scrollPercentage < 100) {
      logScrollDepth(75);
      window.removeEventListener('scroll', this.log75ScrollDepth);
      window.addEventListener('scroll', this.log100ScrollDepth);
    }
  };

  log50ScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY ? window.scrollY : window.pageYOffset) /
        (document.documentElement.scrollHeight - window.innerHeight) *
        100,
    );

    if (scrollPercentage >= 50 && scrollPercentage < 75) {
      logScrollDepth(50);
      window.removeEventListener('scroll', this.log50ScrollDepth);
      window.addEventListener('scroll', this.log75ScrollDepth);
    }
  };

  log25ScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY ? window.scrollY : window.pageYOffset) /
        (document.documentElement.scrollHeight - window.innerHeight) *
        100,
    );

    if (scrollPercentage >= 25 && scrollPercentage < 50) {
      logScrollDepth(25);
      window.removeEventListener('scroll', this.log25ScrollDepth);
      window.addEventListener('scroll', this.log50ScrollDepth);
    }
  };

  log0ScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY ? window.scrollY : window.pageYOffset) /
        (document.documentElement.scrollHeight - window.innerHeight) *
        100,
    );

    if (scrollPercentage < 25) {
      logScrollDepth(0);
      window.removeEventListener('scroll', this.log0ScrollDepth);
      window.addEventListener('scroll', this.log25ScrollDepth);
    }
  };

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ScrollTracker;
